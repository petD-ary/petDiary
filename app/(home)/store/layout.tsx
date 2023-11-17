import ChangePageBtn from '@/components/ChangePageBtn';

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const StoreList = [
    { path: '/store/shop', title: '구매하기' },
    { path: '/store/sell', title: '판매/나눔 하기' },
  ];

  return (
    <div>
      <ChangePageBtn PageList={StoreList} />
      {children}
    </div>
  );
};

export default StoreLayout;
