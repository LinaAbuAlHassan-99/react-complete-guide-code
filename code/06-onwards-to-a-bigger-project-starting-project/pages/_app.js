import "../styles/globals.css";
import Layout from "../components/layout/Layout";
//have the all comp //componant paremeter change depend on comp loaded
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
