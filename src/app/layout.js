import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Престол Давида Царство Иисуса Христа",
  description:
    "Мы проектируем Царство Иисуса Христа. Мы формируем все его составляющие. Мы приглашаем людей с чистым сердцем принять участие в созидании Царства. Οικοδομούμε τη Βασιλεία του Ιησού Χριστού στη γη. Διαμορφώνουμε όλα τα συστατικά της. Προσκαλούμε ανθρώπους με αγνές καρδιές να συμμετάσχουν στην οικοδόμηση της Βασιλείας. We design. the Kingdom of Jesus Christ. We are shaping all its components. We invite people with pure hearts to participate in building the Kingdom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
