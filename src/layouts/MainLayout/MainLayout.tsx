import Navbar from '@/components/Common/navbar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MainLayout(props: any) {
  const { children } = props;
  return (
    <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
      <Navbar {...props} />
      <div>{children}</div>

      {/* <Footer {...props} /> */}
    </div>
  );
}
