import { useQuestions } from '../hooks/useQuestions';

const Options = ({ question }) => {
  const { dispatch, answer } = useQuestions();

  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${answer === i ? 'answer' : ''} ${
            hasAnswered
              ? i === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
