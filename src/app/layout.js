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
  title: "Aptos Victors",
  description: "Welcome to Aptos Victors, endless runner game that blends the thrill of augmented reality with the revolutionary world of web3. Step into the shoes of Victor, a courageous hero on a mission to defend the decentralized metaverse from the clutches of centralization and the oppressive forces of Web2.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cc.variable} ${dm_mono.variable}`}>{children}</body>
    </html>
  );
}
