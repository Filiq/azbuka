import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Link from 'next/link';

export default function HomePage() {
  const alphabet = [
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
  ];

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center space-y-8 text-center'>
            <h1>Procvičování azbuky</h1>
            <Link href='/vyslovnost'>
              <a
                href=''
                className='w-60 rounded-xl bg-gray-100 py-6 px-8 transition-colors hover:bg-gray-200'
              >
                Procvičení výslovnosti
              </a>
            </Link>
            <Link href='/pismena'>
              <a
                href=''
                className='w-60 rounded-xl bg-gray-100 py-6 px-8 transition-colors hover:bg-gray-200'
              >
                Procvičení písmen
              </a>
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
                <div className='flex h-8 w-96'>
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
{
  /* 
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
  ['Я я', 'ja']; */
}
