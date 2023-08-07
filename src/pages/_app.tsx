import type { AppProps } from "next/app";
import "../styles/general.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
