import Layout from "@/components/Layout";
import { AuthContextProvider } from "@/context/Auth";
import { CommonFunctionsContextProvider } from "@/context/CommonFunctions";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <CommonFunctionsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CommonFunctionsContextProvider>
    </AuthContextProvider>
  );
}
