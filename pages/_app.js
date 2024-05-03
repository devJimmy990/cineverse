import "@/styles/globals.css";
import CustomizedAppBar from "@/components/nav_bar";
// import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/controller/store";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  })
  return (
    <div>
      <Provider store={store}>
        <SessionProvider session={session}>
          <CustomizedAppBar />
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </div>
  );
}
