import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Navigation from "./navigation";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex w-full h-screen">
        <Navigation />
        <section className="w-full p-4">
          <div className="w-full h-64 p-4 text-md"> {children}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;