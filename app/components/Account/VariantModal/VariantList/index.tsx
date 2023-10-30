import { Variant } from './styled';

interface VariantListProps {
  id: string;
  title: string;
  handlePutId?: (id: string) => void;
}

const VariantList = ({ id, title, handlePutId }: VariantListProps) => {
  return (
    <Variant onClick={() => handlePutId && handlePutId(id)}>{title}</Variant>
  );
};

export default VariantList;
