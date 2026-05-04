// Main questions file - combines all question parts
import { Question } from './types';
import { questions1 } from './questions-part1';
import { questions2 } from './questions-part2';
import { questions3 } from './questions-part3';
import { questions4 } from './questions-part4';
import { questions5 } from './questions-part5';
import { questions6 } from './questions-part6';

// Combine all questions
export const questions: Question[] = [
  ...questions1,
  ...questions2,
  ...questions3,
  ...questions4,
  ...questions5,
  ...questions6
];

// Extract unique categories
export const categories = ['All', ...Array.from(new Set(questions.map(q => q.category)))];

// Priority areas for AZ-305
export const priorityAreas = [
  'Identity and Access Management',
  'Data Storage Solutions',
  'Business Continuity',
  'Infrastructure Solutions',
  'Unknown'
];

export type { Question };
