import "../styles/global.css";
import AppHead from "../components/AppHead";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  );
}
