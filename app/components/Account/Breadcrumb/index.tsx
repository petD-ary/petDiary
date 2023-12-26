// import chevron from '@/assets/images/chevron.png';
// import activeChevron from '@/assets/images/activeChevron.png';
import Image from 'next/image';

const Breadcrumb = ({ step }: { step: number }) => {
  const accountPage = [
    {
      step: 0,
      title: '내 정보 입력',
    },
    {
      step: 1,
      title: '반려동물 정보 입력',
    },
    {
      step: 2,
      title: '가입 완료',
    },
  ];

  return (
    <ul
      className='w-full
    flex justify-center gap-16
    border-b-2 border-b-black
    py-12 mx-auto
    [&_li:last-child_span]:hidden
    '
    >
      {accountPage.map((page) => {
        const active = page.step <= step;

        return (
          <li
            key={page.step}
            className={`
            relative
            ${active ? 'text-black' : 'text-grayColor-200'}
            `}
          >
            <span
              className='w-3 h-3 block
            absolute -right-[38px] top-1/2 -translate-y-1/2
            '
            >
              {/* <Image
                src={active ? activeChevron : chevron}
                alt='>'
                fill
                sizes='100%'
                style={{ objectFit: 'contain' }}
                priority
              /> */}
            </span>
            {page.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
