import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast"
import { api } from "~/utils/api";
import {Inter} from "next/font/google"
import "~/styles/globals.css";

const inter = Inter({

  subsets:["latin"]
}
)


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
      
    <SessionProvider session={session}>

      <div className={inter.className}>

      <Component  {...pageProps} />
      
      <Toaster />
      </div>
    </SessionProvider>
      
  );
};

export default api.withTRPC(MyApp);
