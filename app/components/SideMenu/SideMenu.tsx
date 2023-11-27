import NavBtn from "./Menu";

const SideMenu = () => {
  let nav = [
    {
      title: "스탬프",
      link: "/stemp/walk",
    },
    {
      title: "캘린더",
      link: "#",
    },
    {
      title: "반려스토어",
      link: "/store/shop",
    },
    {
      title: "커뮤니티",
      link: "#",
    },
  ];
  return (
    <div
      className="fixed bottom-0 sm:top-0 z-10 flex flex-row-reverse sm:flex-col justify-around sm:justify-between
    w-full sm:w-[80px] lg:w-[110px] sm:h-screen sm:py-20
     bg-grayColor-100"
    >
      <div className="flex sm:flex-col gap-6 items-center">
        <div className="hidden sm:block w-20 sm:pb-6 sm:border-b border-grayColor-400">
          <div className="w-8 h-8 mx-auto mb-1 rounded-2xl bg-grayColor-200"></div>
        </div>
        <div className="flex sm:flex-col sm:gap-6 items-center justify-around">
          {nav.map((item) => {
            return <NavBtn key={item.title} navItem={item.title} icon="icon" link={item.link} />;
          })}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <NavBtn navItem="홈" icon="icon" link="/" />
      </div>
    </div>
  );
};

export default SideMenu;
