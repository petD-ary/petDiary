import { Caption } from '@/constants/Typography/TypographyList';

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

  if (step === 2) return;

  return (
    <div className='flex gap-3 pt-4'>
      {accountPage.map((page) => (
        <div
          key={page.title}
          className={`w-5 h-5 text-white flex justify-center items-center
          rounded-[4px] cursor-default
          ${step + 1 === page.title ? 'bg-primary-700' : 'bg-grayColor-200'}`}
        >
          <p className={`${Caption.caption1}`}>{page.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
