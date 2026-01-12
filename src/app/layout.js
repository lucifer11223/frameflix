import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "FrameFlix",
  description: "Guess the movie from the frame",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
