import RootLayout from "@/components/RootLayout";
import { persistor, store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="font-bodyFont bg-gray-300">
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </div>
      </PersistGate>
    </Provider>
  );
}
