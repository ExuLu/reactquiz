import { useQuestions } from '../hooks/useQuestions';

const Options = () => {
  const { questions, index, dispatch, answer } = useQuestions();

  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {questions[index].options.map((option, i) => (
        <button
          className={`btn btn-option ${answer === i ? 'answer' : ''} ${
            hasAnswered
              ? i === questions[index].correctOption
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
