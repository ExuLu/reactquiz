import { useQuestions } from '../hooks/useQuestions';

function Progress() {
  const { index, points, answer, numQuestions, maxPossiblePoints } =
    useQuestions();

  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
