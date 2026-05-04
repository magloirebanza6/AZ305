export interface Question {
  id: number;
  category: string;
  type: 'multiple-choice' | 'flashcard';
  question: string;
  // Multiple choice fields
  options?: string[];
  correct?: number[];
  multipleAnswers?: boolean;
  // Images for multiple choice questions with diagrams
  images?: string[];
  // Flashcard fields - supports multiple front images
  frontImages?: string[];
  backImage?: string;
  // Legacy single image fields (kept for backward compatibility)
  imageUrl?: string;
  front?: string;
  back?: string;
  // Explanation and source
  explanation: string;
  sourceLink?: string;
}
