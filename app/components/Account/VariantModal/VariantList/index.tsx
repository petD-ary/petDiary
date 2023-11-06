interface VariantListProps {
  id: string;
  title: string;
  handlePutId: (id: string) => void;
}

const VariantList = ({ id, title, handlePutId }: VariantListProps) => {
  return (
    <li
      onClick={() => handlePutId(id)}
      className={`w-full p-5 border-b border-grayColor-200 
      ${id === '' ? 'cursor-default' : 'cursor-pointer'}
      `}
    >
      {title}
    </li>
  );
};

export default VariantList;
