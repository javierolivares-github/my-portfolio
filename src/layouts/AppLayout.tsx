import Navbar from "../components/patterns/navbar/Navbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AppLayout;