const Category = ({
  commonCSS,
  children,
  selected,
  onClick,
}: {
  commonCSS: string;
  children: React.ReactNode;
  selected: string;
  onClick: (value: string) => void;
}) => {
  return (
    <li
      className={`${commonCSS} w-full font-semibold cursor-pointer
      ${
        selected === children
          ? 'border-black bg-grayColor-100'
          : 'border-grayColor-200 bg-white text-[#4e4e4e]'
      }
      `}
      onClick={() => onClick(`${children}`)}
    >
      {children}
    </li>
  );
};

export default Category;
