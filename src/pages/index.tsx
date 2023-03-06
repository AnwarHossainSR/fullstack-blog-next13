import { Head } from '@/components';
import Container from '@/components/Common/container';
import { MainLayout } from '@/layouts';

export default function HomePage() {
  return (
    <>
      <Head />
      <MainLayout>
        <section className="p-8 flex flex-col h-full justify-center items-center">
          <Container className="flex flex-col justify-center items-center">
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2">sf</div>
          </Container>
        </section>
      </MainLayout>
    </>
  );
}
