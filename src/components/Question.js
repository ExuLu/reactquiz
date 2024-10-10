import Options from './Options';

import { useQuestions } from '../hooks/useQuestions';

const Question = () => {
  const { questions, index } = useQuestions();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
};

export default Question;
