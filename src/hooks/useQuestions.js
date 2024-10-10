import { useContext } from 'react';

import { QuestionContext } from '../contexts/QuestionContext';

const useQuestions = () => {
  const context = useContext(QuestionContext);

  if (context === undefined)
    throw new Error('Context is used outside of provider');

  return context;
};

export { useQuestions };
