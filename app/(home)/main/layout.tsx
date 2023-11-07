import SideMenu from "@/components/SideMenu/SideMenu";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideMenu />
      {children}
    </div>
  );
};

export default MainLayout;
