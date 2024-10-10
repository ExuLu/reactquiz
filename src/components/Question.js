import Options from './Options';

import { useQuestions } from '../hooks/useQuestions';

const Question = () => {
  const { question, dispatch, answer } = useQuestions();
  return (
    <div>
      <h4>{question.question}</h4>
      <Options questionObj={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
