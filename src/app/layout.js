import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/FooterSection/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zemalt",
  description: "Zemalt-Where Strategy Meets Success!",
   icons: {
    icon: "/fav.png",
  },
};

<meta
  name="google-site-verification"
  content="sAcX-DR4IovuIXPjgSn_hDj676EfLGElT-ByNiLBOdI"
/>;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="sAcX-DR4IovuIXPjgSn_hDj676EfLGElT-ByNiLBOdI"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
