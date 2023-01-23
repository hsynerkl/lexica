import { FC, ReactNode } from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="md:pt-14">{children}</main>
    </>
  );
};

export default Layout;
