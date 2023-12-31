import Text1 from '@/components/Typography/Text1';

const Breadcrumb = ({ step }: { step: number }) => {
  const accountPage = [
    {
      step: 0,
      title: 1,
    },
    {
      step: 1,
      title: 2,
    },
  ];

  return (
    <div className='flex gap-3 pt-4'>
      {accountPage.map((page) => (
        <div
          key={page.title}
          className={`w-5 h-5 text-white flex justify-center items-center
          rounded-[4px] cursor-default
          ${step + 1 === page.title ? 'bg-primary-700' : 'bg-grayColor-200'}`}
        >
          <Text1>{page.title}</Text1>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
