import { Head } from '@/components';
import { MainLayout } from '@/layouts';

export default function HomePage() {
  return (
    <>
      <Head />
      <MainLayout>
        <section className="p-8 flex flex-col h-full justify-center items-center">
          <h1 className="text-3xl font-bold font-poppins">Next Blog</h1>
        </section>
      </MainLayout>
    </>
  );
}
