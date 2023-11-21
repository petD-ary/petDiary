import NavBtn from "./Menu";

const SideMenu = () => {
  let nav = [
    {
      title: "스탬프",
      link: "",
    },
    {
      title: "캘린더",
      link: "",
    },
    {
      title: "반려스토어",
      link: "",
    },
    {
      title: "커뮤니티",
      link: "",
    },
  ];
  return (
    <div className="absolute flex flex-col justify-between w-1/12 h-screen py-20 rounded-ee-3xl rounded-se-3xl bg-grayColor-100">
      <div className="flex flex-col gap-5">
        <div className="w-8 h-8 mx-auto mb-1 rounded-2xl bg-grayColor-200"></div>
        {nav.map((item, i) => {
          return <NavBtn key={item.title} navItem={item.title} icon="icon" />;
        })}
      </div>
      <div>
        <NavBtn navItem="홈" icon="icon" />
      </div>
    </div>
  );
};

export default SideMenu;
