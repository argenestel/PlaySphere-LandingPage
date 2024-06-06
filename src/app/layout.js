import { Inter ,Climate_Crisis, DM_Mono } from 'next/font/google'

const cc = Climate_Crisis({
  subsets: ['latin'],
  variable: '--font-cc',
  display: 'swap',
})
 
const dm_mono = DM_Mono({
  weight:['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dmmono',
})
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Playsphere",
  description: "Welcome to Playsphere, a cutting-edge web3 organization that specializes in gaming, web3 superapp development on the Aptos blockchain, and a variety of other exciting projects. We are passionate about pushing the boundaries of what's possible in the world of decentralized technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cc.variable} ${dm_mono.variable}`}>{children}</body>
    </html>
  );
}
