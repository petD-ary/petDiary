import { StepWrapper, Steplist } from './styled';
import chevron from '@/assets/images/chevron.png';
import activeChevron from '@/assets/images/activeChevron.png';

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
    <StepWrapper>
      {accountPage.map((page) => {
        const active = page.step <= step;

        return (
          <Steplist
            key={page.step}
            $active={active}
            $chevron={chevron}
            $activeChevron={activeChevron}
          >
            {page.title}
          </Steplist>
        );
      })}
    </StepWrapper>
  );
};

export default Breadcrumb;
