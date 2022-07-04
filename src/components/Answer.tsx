export default function Answer({
  answer,
  setAnswer,
}: {
  answer: string;
  setAnswer: (value: string) => void;
}) {
  return (
    <div className='flex h-32 w-96 items-center justify-center'>
      <input
        type='text'
        className='h-full w-full text-center text-6xl'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
}
