import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Link from 'next/link';
import { alphabet } from '@/alphabet';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center space-y-8 text-center'>
            <h1>Procvičování azbuky</h1>
            <Link href='/vyslovnost'>
              <button className='w-60 rounded-xl bg-gray-100 py-6 px-8 transition-colors hover:bg-gray-200'>
                Procvičení výslovnosti
              </button>
            </Link>
            <Link href='/pismena'>
              <button className='w-60 rounded-xl bg-gray-100 py-6 px-8 transition-colors hover:bg-gray-200'>
                Procvičení písmen
              </button>
            </Link>
            <div>
              <div className='flex h-8 w-96'>
                <div className='flex w-full items-center justify-center border-r-2 border-l-2 border-t-2 border-b font-semibold'>
                  Písmeno
                </div>
                <div className='flex w-full items-center justify-center border-t-2 border-r-2 border-l border-b font-semibold'>
                  Výslovnost
                </div>
              </div>
              {alphabet.map(([letter, sound], index, { length }) => (
                <div className='flex h-8 w-96' key={index}>
                  <div
                    className={`flex w-full items-center justify-center ${
                      index == length - 1
                        ? 'border'
                        : 'border-l border-t border-r'
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
          </div>
        </section>
      </main>
    </Layout>
  );
}
