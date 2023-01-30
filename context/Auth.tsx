import { createContext, FC, ReactNode, useContext } from "react";

type AuthContextType = {};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContex = createContext({} as AuthContextType);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const data = {};
  return <AuthContex.Provider value={data}>{children}</AuthContex.Provider>;
};

export const useAuth = () => useContext(AuthContex);
