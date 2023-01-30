import { useCommonFunctions } from "@/context/CommonFunctions";
import { FC, ReactNode } from "react";
import LoginModal from "../common/LoginModal";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const { showModal } = useCommonFunctions();
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {showModal && <LoginModal />}
    </>
  );
};

export default Layout;
