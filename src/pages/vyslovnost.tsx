import { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Task from '@/components/Task';
import Answer from '@/components/Answer';
import Help from '@/components/Help';
import Link from 'next/link';
import ThreeExamples from '@/components/ThreeExample';
import { alphabet } from '@/alphabet';
import getRandomElements from '@/lib/getRandomElements';

export default function HomePage() {
  const [answer, setAnswer] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [hintCount, setHintCount] = useState(0);
  const [examples, setExamples] = useState([[]]);

  useEffect(() => {
    setExamples(getRandomElements(alphabet, 3, correctAnswer, 1));
  }, [correctAnswer]);

  return (
    <Layout>
      <Seo templateTitle='Azbuka - výslovnost' />
      <main>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col'>
            <div className='layout mt-4 flex flex-col items-center space-y-8 text-center'>
              <h1>Procvičování azbuky</h1>
              <h3>Výslovnost</h3>
              <Task
                taskType='vyslovnost'
                answer={answer}
                setAnswer={setAnswer}
                questionIndex={questionIndex}
                setQuestionIndex={setQuestionIndex}
                setCorrectAnswer={setCorrectAnswer}
                setShowCorrectAnswer={setShowCorrectAnswer}
                questionCount={questionCount}
                setQuestionCount={setQuestionCount}
              />
              <Answer answer={answer} setAnswer={setAnswer} />
              <Help
                correctAnswer={correctAnswer}
                showCorrectAnswer={showCorrectAnswer}
                setShowCorrectAnswer={setShowCorrectAnswer}
                hintCount={hintCount}
                setHintCount={setHintCount}
              />
              <div>
                <p>Počet splněných znaků: {questionCount}</p>
                <p>Použité nápovědy: {hintCount}</p>
              </div>
            </div>
            <div className='layout flex w-1/3 flex-col items-center space-y-8 text-center'>
              <ThreeExamples examples={examples} />
            </div>
          </div>
          <Link href='/'>
            <p className='absolute top-5 left-5 hidden cursor-pointer py-2 px-4 transition-colors sm:flex'>
              Zpátky na hlavní stránku
            </p>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
