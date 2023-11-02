import useModal from '@/hooks/useModal';
import { variantModalState } from '@/recoil/atoms';
import { useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import VariantList from './VariantList';
import { Container } from './styled';

interface VariantModalProps {
  variant: '강아지' | '고양이';
  variantData: { id: string; title: string }[];
}

const VariantModal = ({ variant, variantData }: VariantModalProps) => {
  const setIsOpen = useSetRecoilState(variantModalState);
  const ref = useRef<HTMLDivElement>(null);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  console.log(
    '🚀 ~ file: index.tsx:18 ~ VariantModal ~ selectedId:',
    selectedId
  );

  const handleOpenModal = () => {
    setIsOpen(false);
  };

  useModal(ref, handleOpenModal);

  const handlePutId = (id: string) => {
    setSelectedId(id);

    setIsOpen(false);
  };

  return (
    <Container>
      <div ref={ref}>
        <h2>{variant === '강아지' ? '견종' : '묘종'}선택</h2>

        <p>
          {variant === '강아지' ? '견종을 입력해주세요' : '묘종을 입력해주세요'}
        </p>

        <ul>
          {variantData.map(({ id, title }) => (
            <VariantList
              key={id}
              id={id}
              title={title}
              handlePutId={handlePutId}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default VariantModal;
