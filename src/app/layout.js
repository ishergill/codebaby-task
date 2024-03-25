import { Inter } from "next/font/google";
import '../app/styles/main.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BaybyCode",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
