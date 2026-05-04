# AZ-305 Study Platform

A comprehensive study platform for the Azure Solutions Architect Expert (AZ-305) certification exam.

## Features

- 📝 **Quiz Mode** - Test your knowledge with multiple-choice questions
- 🎴 **Flashcard Mode** - Review concepts with interactive flashcards
- 🔄 **Review Mode** - Focus on questions you got wrong
- 📊 **Progress Tracking** - Track your score and completion
- 🎯 **Category Filtering** - Focus on specific exam domains
- 📱 **Responsive Design** - Works on desktop and mobile

## Exam Domains Covered

1. Design Identity, Governance, and Monitoring Solutions (25-30%)
2. Design Data Storage Solutions (25-30%)
3. Design Business Continuity Solutions (10-15%)
4. Design Infrastructure Solutions (25-30%)

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deploy to Vercel

The easiest way to deploy this app is to use [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will detect Next.js and configure the build settings automatically
4. Click "Deploy"

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Project Structure

```
az305-quiz/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── AZ305EnhancedQuiz.tsx
├── data/
│   └── questions.ts
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## License

MIT
