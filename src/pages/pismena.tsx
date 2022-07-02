import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Task from '@/components/Task';
import Answer from '@/components/Answer';
import Help from '@/components/Help';
import Link from 'next/link';

export default function HomePage() {
  const [answer, setAnswer] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [hintCount, setHintCount] = useState(0);

  return (
    <Layout>
      <Seo templateTitle='Azbuka - písmena' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center space-y-8 text-center'>
            <h1>Procvičování azbuky</h1>
            <h3>Písmena</h3>
            <Task
              taskType='pismena'
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
          <Link href='/'>
            <p className='absolute top-5 left-5 cursor-pointer transition-colors hover:text-gray-600'>
              Zpátky na hlavní stránku
            </p>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
