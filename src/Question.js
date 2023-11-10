import Option from './Option';

function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <ul className='options'>
        {question.options.map((option, i) => (
          <Option key={option} option={option} index={i} />
        ))}
      </ul>
    </div>
  );
}

export default Question;
