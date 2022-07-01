import * as React from 'react';

import Layout from '@/components/layout/Layout';

import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='text-4xl md:text-6xl'>Страница не найдена</h1>
            <h2 className='mt-8 text-3xl md:text-5xl'>Stránka nenalezena</h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
