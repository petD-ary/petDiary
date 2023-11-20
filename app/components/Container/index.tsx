const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='mx-2 sm:mx-auto px-0 sm:px-6 lg:px-20
    h-full lg:w-[calc(100%_-_110px)]'
    >
      {children}
    </div>
  );
};

export default Container;
