import { Head } from '@/components';
import Container from '@/components/Common/container';
import Post from '@/components/Posts/Post';
import { MainLayout } from '@/layouts';
import { posts } from '@/lib';

export default function HomePage() {
  return (
    <>
      <Head />
      <MainLayout>
        <section className="p-8 flex flex-col h-full justify-center items-center">
          <Container className="flex flex-col justify-center items-center">
            <div className="grid gap-10 lg:gap-10 md:grid-cols-2">
              {posts.slice(0, 2).map((item: any) => (
                <Post key={item._id} post={item} aspect="landscape" />
              ))}
            </div>
          </Container>
        </section>
      </MainLayout>
    </>
  );
}
