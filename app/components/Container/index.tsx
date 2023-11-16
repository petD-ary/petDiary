const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-2 sm:mx-auto px-0 sm:px-6 lg:px-12 h-full'>
      {children}
    </div>
  );
};

export default Container;
