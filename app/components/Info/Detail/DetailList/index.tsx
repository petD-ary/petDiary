const DetailList = ({
  title,
  desc,
}: {
  title: string;
  desc: string | { id: number; symptom: string }[];
}) => {
  return (
    <div className='border-b border-extra-deviders py-4'>
      <h4 className='text-button font-semibold text-text-title pb-2'>
        {title}
      </h4>
      <p className='text-body2 text-text-secondary'>
        {typeof desc === 'string'
          ? desc
          : desc.map((item) => (
              <span key={item.id} className='block pb-1'>
                {item.symptom}
              </span>
            ))}
      </p>
    </div>
  );
};

export default DetailList;
