import { createContext, FC, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  showModal: boolean;
  handleShowHidemModal: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContex = createContext({} as AuthContextType);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowHidemModal = () => {
    setShowModal((prev) => !prev);
  };

  const data = { showModal, handleShowHidemModal };
  return <AuthContex.Provider value={data}>{children}</AuthContex.Provider>;
};

export const useAuth = () => useContext(AuthContex);
