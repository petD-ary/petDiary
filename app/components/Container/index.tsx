const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="sm:mx-auto px-2 sm:px-6 lg:px-20
    h-full w-full sm:w-[calc(100%_-_80px)] lg:w-[calc(100%_-_110px)]"
    >
      {children}
    </div>
  );
};

export default Container;
