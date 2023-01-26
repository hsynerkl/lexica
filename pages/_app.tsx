import Layout from "@/components/Layout";
import { ContentContextProvider } from "@/context/Content";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContentContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContentContextProvider>
  );
}
