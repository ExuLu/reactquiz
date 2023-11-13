function Options({ questionObj, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {questionObj.options.map((option, i) => (
        <button
          className={`btn btn-option ${answer === i ? 'answer' : ''} ${
            hasAnswered
              ? i === questionObj.correctOption
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
}

export default Options;
