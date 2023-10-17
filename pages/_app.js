import "../styles/globals.css";
import { IntercomProvider } from "../util/IntercomProvider";

function MyApp({ Component, pageProps }) {
  return (
    <IntercomProvider
      bootParams={{
        name: "Munazar Ali", 
        email: "munazar@ankra.io", 
        createdAt: "1697527277" 
      }}
    >
      <Component {...pageProps} />
    </IntercomProvider>
  );
}

export default MyApp;
