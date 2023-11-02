interface VariantListProps {
  id: string;
  title: string;
  handlePutId?: (id: string) => void;
}

const VariantList = ({ id, title, handlePutId }: VariantListProps) => {
  return (
    <option
      onClick={() => handlePutId && handlePutId(id)}
      className='w-full p-5 border-b border-grayColor-200'
    >
      {title}
    </option>
  );
};

export default VariantList;
