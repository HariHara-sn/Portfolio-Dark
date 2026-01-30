import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ScrollWrapper from "./scroll-wrapper";
import "./css/card.scss";
import "./css/globals.scss";
import { icons } from "react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HariHaraSudhan - Software Developer",
  description:
    "This is the portfolio of Hari Hara Sudhan. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  icons: {
    // icon : "https://media.licdn.com/dms/image/v2/D5603AQHy-82X3KZRhw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711210204962?e=1771459200&v=beta&t=-fXz5FbBpW2KTQv9Rf2TvsXLaw6SXutkc-bzZh3EWi4", //from linkedin
    icon : "https://media.githubusercontent.com/media/HariHara-sn/Portfolio-Dark/main/public/logo/image.png",
    // icon : "/logo/image.png" //this will not work in after deployment
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
        <ScrollWrapper />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
