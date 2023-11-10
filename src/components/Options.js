function Options({ questionObj }) {
  return (
    <div className='options'>
      {questionObj.options.map((option, i) => (
        <button className='btn btn-option' key={option}>
          {option} 
        </button>
      ))}
    </div>
  );
}

export default Options;
