import NavBar from "../components/NavBar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      
      <Component {...pageProps} />
  </div>
  );
}

export default MyApp;
