import NavBtn from './Menu';

const SideMenu = () => {
  let nav = [
    {
      title: '스탬프',
      link: '/stemp/walk',
    },
    {
      title: '캘린더',
      link: '#',
    },
    {
      title: '반려스토어',
      link: '/store/shop',
    },
    {
      title: '커뮤니티',
      link: '#',
    },
  ];
  return (
    <div
      className='fixed z-10 flex flex-col justify-between
    lg:w-[110px] h-screen py-20
    rounded-ee-3xl rounded-se-3xl bg-grayColor-100'
    >
      <div className='flex flex-col gap-6 items-center'>
        <div className='w-20 pb-6 border-b border-grayColor-400'>
          <div className='w-8 h-8 mx-auto mb-1 rounded-2xl bg-grayColor-200'></div>
        </div>
        <div className='flex flex-col gap-6 items-center'>
          {nav.map((item) => {
            return (
              <NavBtn
                key={item.title}
                navItem={item.title}
                icon='icon'
                link={item.link}
              />
            );
          })}
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <NavBtn navItem='홈' icon='icon' link='/' />
      </div>
    </div>
  );
};

export default SideMenu;
