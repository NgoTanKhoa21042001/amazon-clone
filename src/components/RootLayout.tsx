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
      {/* la mặc định chuyển trang nào cũng giữ phần Header và bottom Header */}
      <Header />
      <BotoomHeader />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
