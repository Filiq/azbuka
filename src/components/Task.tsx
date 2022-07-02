import { useEffect, useState } from 'react';

export default function Task({
  taskType,
  answer,
  setAnswer,
  questionIndex,
  setQuestionIndex,
  setCorrectAnswer,
  setShowCorrectAnswer,
  questionCount,
  setQuestionCount,
}: {
  taskType: string;
  answer: string;
  setAnswer: (value: string) => void;
  questionIndex: number;
  setQuestionIndex: (value: number) => void;
  setCorrectAnswer: (value: string) => void;
  setShowCorrectAnswer: (value: boolean) => void;
  questionCount: number;
  setQuestionCount: (value: number) => void;
}) {
  const [mount, setMount] = useState(false);

  const [russianAlphabet, setRussianAlphabet] = useState([
    ['А а', 'a'],
    ['Б б', 'be'],
    ['В в', 've'],
    ['Г г', 'ge'],
    ['Д д', 'de'],
    ['Е е', 'je'],
    ['Ё ё', 'jo'],
    ['Ж ж', 'že'],
    ['З з', 'ze'],
    ['И и', 'i'],
    ['Й й', 'j'],
    ['К к', 'ka'],
    ['Л л', 'el'],
    ['М м', 'em'],
    ['Н н', 'en'],
    ['О о', 'o'],
    ['П п', 'pe'],
    ['Р р', 'er'],
    ['С с', 'es'],
    ['Т т', 'te'],
    ['У у', 'u'],
    ['Ф ф', 'f'],
    ['Х х', 'cha'],
    ['Ц ц', 'ce'],
    ['Ч ч', 'če'],
    ['Ш ш', 'ša'],
    ['Щ щ', 'šč'],
    ['Ъ ъ', 'tvrdý znak'],
    ['Ы ы', 'y'],
    ['Ь ь', 'měkký znak'],
    ['Э э', 'e'],
    ['Ю ю', 'ju'],
    ['Я я', 'ja'],
  ]);

  useEffect(() => {
    setRussianAlphabet(shuffle(russianAlphabet));
    setMount(true);
  }, []);

  useEffect(() => {
    setCorrectAnswer(
      russianAlphabet[questionIndex][taskType === 'vyslovnost' ? 1 : 0]
    );
  }, [questionIndex]);

  useEffect(() => {
    if (
      (taskType === 'vyslovnost' &&
        answer == russianAlphabet[questionIndex][1]) ||
      (taskType === 'pismena' &&
        answer.replaceAll(' ', '') !== '' &&
        russianAlphabet[questionIndex][0].includes(answer.replaceAll(' ', '')))
    ) {
      if (questionIndex == russianAlphabet.length - 1) {
        setQuestionIndex(0);
      } else {
        setQuestionIndex(questionIndex + 1);
      }
      setQuestionCount(questionCount + 1);
      setAnswer('');
      setShowCorrectAnswer(false);
    }
  }, [answer]);

  return (
    <div className='flex h-32 w-96 items-center justify-center bg-gray-100 text-center'>
      <p className='text-6xl'>
        {mount
          ? russianAlphabet[questionIndex][taskType === 'vyslovnost' ? 0 : 1]
          : ''}
      </p>
    </div>
  );
}

function shuffle(array: any[]) {
   let m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
