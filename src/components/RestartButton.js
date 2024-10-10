import { useQuestions } from '../hooks/useQuestions';

const RestartButton = () => {
  const { dispatch } = useQuestions();

  return (
    <button
      className='btn btn-ui'
      onClick={() => dispatch({ type: 'restart' })}
    >
      Restart Quiz
    </button>
  );
};

export default RestartButton;
