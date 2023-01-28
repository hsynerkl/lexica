import { useAuth } from "@/context/Auth";
import { FC, ReactNode } from "react";
import LoginModal from "../common/LoginModal";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const { showModal } = useAuth();
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {showModal && <LoginModal />}
    </>
  );
};

export default Layout;
