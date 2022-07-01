export default function Help({
  correctAnswer,
  showCorrectAnswer,
  setShowCorrectAnswer,
  hintCount,
  setHintCount,
}: {
  correctAnswer: string;
  showCorrectAnswer: boolean;
  setShowCorrectAnswer: (value: boolean) => void;
  hintCount: number;
  setHintCount: (value: number) => void;
}) {
  return (
    <div className='flex h-12 w-96 items-center justify-center bg-gray-100'>
      {showCorrectAnswer ? (
        <p>Správná odpověď: {correctAnswer}</p>
      ) : (
        <button
          className='h-full w-full rounded-xl bg-gray-100 transition-colors hover:bg-gray-200'
          onClick={() => {
            setShowCorrectAnswer(true);
            setHintCount(hintCount + 1);
          }}
        >
          Ukázat správnou odpověď
        </button>
      )}
    </div>
  );
}
