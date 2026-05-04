'use client';

import React, { memo } from 'react';
import { CheckCircle, Flag, HelpCircle, Eye, X } from 'lucide-react';

interface QuestionListPanelProps {
  questions: Array<{ id: number }>;
  currentIndex: number;
  answeredQuestions: Map<number, number[]>;
  flaggedQuestions: Set<number>;
  onGoToQuestion: (index: number) => void;
  onClose: () => void;
  colors: {
    cardBg: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    hoverBg: string;
    selectedBg: string;
  };
}

const QuestionListPanel = memo(function QuestionListPanel({
  questions,
  currentIndex,
  answeredQuestions,
  flaggedQuestions,
  onGoToQuestion,
  onClose,
  colors
}: QuestionListPanelProps) {
  const getQuestionStatus = (q: { id: number }, index: number) => {
    const isAnswered = answeredQuestions.has(q.id);
    const isFlagged = flaggedQuestions.has(q.id);
    const isCurrent = index === currentIndex;
    return { isAnswered, isFlagged, isCurrent };
  };

  return (
    <div className={`absolute top-12 right-0 ${colors.cardBg} border ${colors.border} rounded-lg shadow-xl p-4 z-50 w-80 max-h-96 overflow-y-auto`}>
      <div className="flex justify-between items-center mb-3">
        <span className={`font-medium ${colors.textPrimary}`}>
          Question Navigator
        </span>
        <button 
          onClick={onClose}
          className={`${colors.textSecondary} ${colors.hoverBg} p-1 rounded`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {/* Legend */}
      <div className={`flex flex-wrap gap-3 text-xs ${colors.textSecondary} mb-3 pb-3 border-b ${colors.border}`}>
        <span className="flex items-center gap-1">
          <Eye className="w-3 h-3 text-[#0078d4]" /> Current
        </span>
        <span className="flex items-center gap-1">
          <CheckCircle className="w-3 h-3 text-[#107c10]" /> Answered
        </span>
        <span className="flex items-center gap-1">
          <Flag className="w-3 h-3 text-[#ffb900]" /> Flagged
        </span>
        <span className="flex items-center gap-1">
          <HelpCircle className="w-3 h-3" /> Not answered
        </span>
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {questions.map((q, index) => {
          const { isAnswered, isFlagged, isCurrent } = getQuestionStatus(q, index);
          return (
            <button
              key={q.id}
              onClick={() => onGoToQuestion(index)}
              className={`
                w-10 h-10 rounded flex items-center justify-center text-sm font-medium
                relative transition-all
                ${isCurrent 
                  ? 'bg-[#0078d4] text-white ring-2 ring-[#0078d4] ring-offset-2' 
                  : isAnswered 
                    ? 'bg-[#dff6dd] text-[#107c10] border border-[#107c10]'
                    : `${colors.hoverBg} ${colors.textPrimary} border ${colors.border}`
                }
              `}
            >
              {index + 1}
              {isFlagged && (
                <Flag className="w-3 h-3 text-[#ffb900] absolute -top-1 -right-1" />
              )}
            </button>
          );
        })}
      </div>
      
      {/* Summary */}
      <div className={`mt-4 pt-3 border-t ${colors.border} text-xs ${colors.textSecondary}`}>
        <div className="flex justify-between">
          <span>Answered: {answeredQuestions.size}/{questions.length}</span>
          <span>Flagged: {flaggedQuestions.size}</span>
        </div>
      </div>
    </div>
  );
});

export default QuestionListPanel;
