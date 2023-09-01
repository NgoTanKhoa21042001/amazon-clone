import React, { ReactElement } from "react";
import Footer from "./Footer";
import BotoomHeader from "./header/BotoomHeader";
import Header from "./header/Header";
interface Props {
  children: ReactElement;
}
const RootLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <BotoomHeader />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
