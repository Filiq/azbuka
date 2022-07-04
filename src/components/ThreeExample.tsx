export default function ThreeExamples({ examples }: { examples: string[][] }) {
  return (
    <div className='mt-10 flex h-32 w-96 flex-col items-center justify-center'>
      <div className='flex h-8 w-96'>
        <div className='flex w-full items-center justify-center border-r-2 border-l-2 border-t-2 border-b font-semibold'>
          Písmeno
        </div>
        <div className='flex w-full items-center justify-center border-t-2 border-r-2 border-l border-b font-semibold'>
          Výslovnost
        </div>
      </div>
      {examples.map(([letter, sound], index, { length }) => (
        <div className='flex h-8 w-96' key={index}>
          <div
            className={`flex w-full items-center justify-center ${
              index == length - 1 ? 'border' : 'border-l border-t border-r'
            }`}
          >
            {letter}
          </div>
          <div
            className={`flex w-full items-center justify-center ${
              index == length - 1
                ? 'border-t border-r border-b'
                : 'border-t border-r'
            }`}
          >
            {sound}
          </div>
        </div>
      ))}
    </div>
  );
}
