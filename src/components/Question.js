import Options from './Options';

import { useQuestions } from '../hooks/useQuestions';

const Question = () => {
  const { questions, index } = useQuestions();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options />
    </div>
  );
};

export default Question;
