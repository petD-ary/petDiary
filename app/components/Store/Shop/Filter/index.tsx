interface FilterProps {
  commonCSS: string;
  selected: string;
  onClick: (value: string) => void;
}
const Filter = ({ commonCSS, selected, onClick }: FilterProps) => {
  const filterOptions = [
    { title: '신상품순' },
    { title: '낮은 가격순' },
    { title: '높은 가격순' },
    { title: '할인율순' },
    { title: '리뷰 많은 순' },
    { title: '찜 많은 순' },
  ];

  return (
    <ul
      className={`flex gap-8
    [&_li:last-child]:after:hidden
    w-full ${commonCSS} bg-white border-grayColor-200`}
    >
      {filterOptions.map((option) => (
        <li
          key={option.title}
          className={`relative cursor-pointer
          after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2
          after:block after:w-[1px] after:h-4 after:bg-grayColor-200
          ${
            selected === option.title ? 'text-[#4e4e4e]' : 'text-grayColor-200'
          }`}
          onClick={() => onClick(option.title)}
        >
          {option.title}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
