import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "../styles/fonts.css";
import "@leginar/styles/globals.css";
import { Navbar } from "components/Navbar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="bg-gradient-to-b from-[#FEFCF8] via-white to-[#FEFCF8] h-screen">
        <div className="mx-auto flex w-10/12 flex-col items-center justify-center space-y-20 overscroll-contain   pt-10 font-inter">
          <Navbar />

          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default MyApp;
