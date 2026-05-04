const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Import questions data
const questionsPath = path.join(__dirname, '../data');

async function loadQuestions() {
  // Read all question part files
  const parts = [];
  for (let i = 1; i <= 6; i++) {
    const filePath = path.join(questionsPath, `questions-part${i}.ts`);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      // Extract the array content
      const match = content.match(/export const questions\d+[^=]*=\s*(\[[\s\S]*\]);?\s*$/);
      if (match) {
        // Convert TypeScript to JavaScript (remove type annotations)
        let jsContent = match[1]
          .replace(/as const/g, '')
          .replace(/: Question\[\]/g, '');
        try {
          const questions = eval(jsContent);
          parts.push(...questions);
        } catch (e) {
          console.error(`Error parsing part ${i}:`, e.message);
        }
      }
    }
  }
  return parts;
}

async function generatePDF() {
  console.log('Loading questions...');
  
  // Read and parse questions from TypeScript files
  const allQuestions = await loadQuestions();
  const flashcards = allQuestions.filter(q => q.type === 'flashcard');
  
  console.log(`Found ${flashcards.length} flashcards`);
  
  // Generate HTML content
  const imagesDir = path.join(__dirname, '../public/images/questions');
  
  // Convert image paths to base64 for embedding
  function getImageBase64(imagePath) {
    // Handle both relative and absolute paths
    let fullPath = imagePath;
    if (imagePath.startsWith('/images/questions/')) {
      const filename = imagePath.replace('/images/questions/', '');
      fullPath = path.join(imagesDir, filename);
    }
    
    if (fs.existsSync(fullPath)) {
      const ext = path.extname(fullPath).toLowerCase().replace('.', '');
      const mimeType = ext === 'jpg' ? 'jpeg' : ext;
      const data = fs.readFileSync(fullPath);
      return `data:image/${mimeType};base64,${data.toString('base64')}`;
    }
    return null;
  }
  
  // Get all images for a flashcard
  function getFlashcardImages(q) {
    const images = [];
    if (q.frontImages && q.frontImages.length > 0) {
      images.push(...q.frontImages);
    }
    if (q.imageUrl) {
      images.push(q.imageUrl);
    }
    if (q.images && q.images.length > 0) {
      images.push(...q.images);
    }
    return images;
  }
  
  // Track missing images
  const missingImages = [];
  
  const cardsHtml = flashcards.map((q, idx) => {
    const images = getFlashcardImages(q);
    const backImage = q.backImage;
    
    // Convert images to base64
    const frontImagesHtml = images.map((img, imgIdx) => {
      const base64 = getImageBase64(img);
      if (base64) {
        return `<img src="${base64}" alt="Question diagram ${imgIdx + 1}" class="flashcard-image" />`;
      }
      missingImages.push({ card: idx + 1, type: 'front', path: img });
      return `<div class="image-missing">Image not found: ${img}</div>`;
    }).join('');
    
    const backImageHtml = backImage ? (() => {
      const base64 = getImageBase64(backImage);
      if (base64) {
        return `<img src="${base64}" alt="Answer diagram" class="flashcard-image answer-image" />`;
      }
      missingImages.push({ card: idx + 1, type: 'back', path: backImage });
      return `<div class="image-missing">Answer image not found</div>`;
    })() : '';
    
    return `
      <div class="flashcard-page">
        <!-- Front Side -->
        <div class="flashcard-side front">
          <div class="card-header">
            <span class="card-number">Card ${idx + 1} of ${flashcards.length}</span>
            <span class="card-side-label">FRONT - QUESTION</span>
          </div>
          <div class="card-category">${q.category || 'General'}</div>
          <div class="card-content">
            <div class="scenario-label">📋 SCENARIO / QUESTION</div>
            <p class="scenario-text">${q.question}</p>
            ${images.length > 0 ? `
              <div class="image-section">
                ${frontImagesHtml}
              </div>
            ` : ''}
            ${(q.options || []).length > 0 ? `
              <div class="options-section">
                <div class="options-label">📝 OPTIONS / REQUIREMENTS</div>
                <ul class="options-list">
                  ${(q.options || []).map(opt => `<li>${opt}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
          <div class="card-footer">
            <span class="flip-instruction">✂️ Cut along dotted line — Answer on back →</span>
          </div>
        </div>
        
        <!-- Cut Line -->
        <div class="cut-line"></div>
        
        <!-- Back Side -->
        <div class="flashcard-side back">
          <div class="card-header">
            <span class="card-number">Card ${idx + 1} of ${flashcards.length}</span>
            <span class="card-side-label">BACK - ANSWER</span>
          </div>
          <div class="card-category">${q.category || 'General'}</div>
          <div class="card-content answer-content">
            ${backImage ? `
              <div class="answer-label">✅ ANSWER IMAGE</div>
              <div class="image-section">
                ${backImageHtml}
              </div>
            ` : ''}
            ${q.explanation ? `
              <div class="answer-label">${backImage ? '📝 EXPLANATION' : '✅ SOLUTION / ANSWER'}</div>
              <p class="answer-text">${q.explanation}</p>
            ` : !backImage ? `
              <div class="answer-label">✅ SOLUTION</div>
              <p class="answer-text">Refer to the question image for the HOTSPOT/Drag-Drop answer areas.</p>
            ` : ''}
          </div>
          <div class="card-footer">
            <span class="ms-learn">📚 Microsoft Learn | AZ-305</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>AZ-305 Flashcards</title>
      <style>
        @page {
          size: landscape;
          margin: 0.3cm;
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: 'Segoe UI', system-ui, sans-serif;
          color: #323130;
          line-height: 1.4;
          background: #fff;
        }
        
        .print-info {
          page-break-after: always;
          padding: 2rem;
          text-align: center;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .print-info h1 {
          color: #8764b8;
          margin: 0 0 0.5rem 0;
          font-size: 2.5rem;
        }
        
        .print-info p {
          color: #666;
          margin: 0;
          font-size: 1.1rem;
        }
        
        .instructions-box {
          color: #666;
          margin: 2rem auto;
          padding: 1.5rem;
          background: #f5f0fa;
          border-radius: 12px;
          max-width: 600px;
          font-size: 1rem;
          text-align: left;
        }
        
        .instructions-box strong {
          color: #5c4b8a;
        }
        
        .flashcard-page {
          page-break-after: always;
          display: flex;
          flex-direction: row;
          height: 100vh;
          padding: 0.3cm;
          gap: 0;
        }
        
        .flashcard-page:last-child {
          page-break-after: avoid;
        }
        
        .flashcard-side {
          flex: 1;
          border: 2px solid #8764b8;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #fff;
          max-width: 50%;
        }
        
        .front {
          margin-right: 0.15cm;
          border-color: #0078d4;
        }
        
        .back {
          margin-left: 0.15cm;
          background: linear-gradient(135deg, #f5f0fa 0%, #ede8f5 100%);
          border-color: #8764b8;
        }
        
        .cut-line {
          width: 0;
          border-left: 2px dashed #999;
          position: relative;
        }
        
        .cut-line::before {
          content: '✂';
          position: absolute;
          top: 50%;
          left: -8px;
          transform: translateY(-50%);
          font-size: 14px;
          color: #999;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.3rem 0.6rem;
          border-bottom: 1px solid #e1e1e1;
          background: #f8f8f8;
          flex-shrink: 0;
        }
        
        .back .card-header {
          background: #8764b8;
          color: white;
          border-bottom-color: #7356a5;
        }
        
        .front .card-header {
          background: #0078d4;
          color: white;
          border-bottom-color: #106ebe;
        }
        
        .card-number {
          font-size: 0.65rem;
          font-weight: 500;
        }
        
        .card-side-label {
          font-size: 0.6rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.15rem 0.4rem;
          background: rgba(255,255,255,0.2);
          border-radius: 3px;
        }
        
        .card-category {
          font-size: 0.55rem;
          color: #666;
          padding: 0.2rem 0.6rem;
          background: #f0f0f0;
          border-bottom: 1px solid #e1e1e1;
          flex-shrink: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .back .card-category {
          background: #ede8f5;
        }
        
        .card-content {
          flex: 1;
          padding: 0.4rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .scenario-label, .options-label, .answer-label {
          font-weight: 600;
          font-size: 0.6rem;
          margin-bottom: 0.2rem;
          color: #0078d4;
          flex-shrink: 0;
        }
        
        .back .answer-label {
          color: #5c4b8a;
          font-size: 0.65rem;
        }
        
        .scenario-text {
          font-size: 0.6rem;
          line-height: 1.35;
          margin-bottom: 0.3rem;
          flex-shrink: 0;
          max-height: 4.5rem;
          overflow: hidden;
        }
        
        .answer-text {
          font-size: 0.65rem;
          color: #323130;
          background: white;
          padding: 0.4rem;
          border-radius: 4px;
          border-left: 3px solid #8764b8;
          line-height: 1.4;
        }
        
        .image-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 0;
          margin: 0.2rem 0;
        }
        
        .flashcard-image {
          max-width: 100%;
          max-height: 180px;
          object-fit: contain;
          border: 1px solid #ddd;
          border-radius: 4px;
          background: white;
        }
        
        .answer-image {
          border-color: #8764b8;
        }
        
        .image-missing {
          padding: 0.5rem;
          background: #fee;
          color: #d13438;
          border: 1px dashed #d13438;
          border-radius: 4px;
          font-size: 0.6rem;
          text-align: center;
        }
        
        .options-section {
          margin-top: 0.3rem;
          padding-top: 0.3rem;
          border-top: 1px dashed #ccc;
          flex-shrink: 0;
        }
        
        .options-label {
          color: #5c4b8a;
        }
        
        .options-list {
          margin: 0;
          padding-left: 1rem;
          font-size: 0.55rem;
        }
        
        .options-list li {
          margin-bottom: 0.1rem;
        }
        
        .card-footer {
          padding: 0.2rem 0.6rem;
          border-top: 1px solid #e1e1e1;
          background: #fafafa;
          text-align: center;
          flex-shrink: 0;
        }
        
        .back .card-footer {
          background: #ede8f5;
        }
        
        .flip-instruction {
          font-size: 0.55rem;
          color: #888;
          font-style: italic;
        }
        
        .ms-learn {
          font-size: 0.55rem;
          color: #5c4b8a;
          font-weight: 500;
        }
      </style>
    </head>
    <body>
      <div class="print-info">
        <h1>🎴 AZ-305: Flashcards</h1>
        <p style="font-size: 1.5rem; margin-bottom: 1rem;">${flashcards.length} Cards</p>
        <p style="color: #888; font-size: 0.9rem;">Azure Solutions Architect Expert Certification</p>
        <p style="color: #888; font-size: 0.8rem; margin-top: 0.5rem;">Generated on ${new Date().toLocaleDateString()}</p>
        <div class="instructions-box">
          <strong>✂️ Printing Instructions:</strong><br/><br/>
          • This PDF is formatted for <strong>landscape mode</strong><br/>
          • Each page has FRONT (question) on the left, BACK (answer) on the right<br/>
          • Cut along the dotted line to create individual cards<br/>
          • Fold in half or paste back-to-back for double-sided cards<br/>
          • Images show HOTSPOT/Drag-Drop diagrams with answer areas
        </div>
      </div>
      ${cardsHtml}
    </body>
    </html>
  `;

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Increase timeout for large content with many images
  page.setDefaultTimeout(120000);
  page.setDefaultNavigationTimeout(120000);
  
  console.log('Setting content (this may take a minute with many images)...');
  await page.setContent(html, { 
    waitUntil: 'domcontentloaded',
    timeout: 120000 
  });
  
  const outputPath = path.join(__dirname, '../public/AZ305-Flashcards.pdf');
  
  console.log('Generating PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  
  await browser.close();
  
  const stats = fs.statSync(outputPath);
  const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  
  console.log(`\n✅ PDF generated successfully!`);
  console.log(`📄 File: ${outputPath}`);
  console.log(`📊 Size: ${fileSizeMB} MB`);
  console.log(`🎴 Cards: ${flashcards.length}`);
  
  if (missingImages.length > 0) {
    console.log(`\n⚠️ Missing images: ${missingImages.length}`);
    missingImages.forEach(m => {
      console.log(`   Card ${m.card} (${m.type}): ${m.path}`);
    });
  } else {
    console.log(`✅ All images found and embedded!`);
  }
}

generatePDF().catch(console.error);
