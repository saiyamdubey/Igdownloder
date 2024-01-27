import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instant Downloader videos  ",
  description:
    "Instagram Downloader | Unlock the full potential of your Instagram experience with our versatile Instagram Downloader! Whether you're looking to save captivating videos, stunning images, engaging Reels, profile pictures (DP), captivating Stories, or eye-catching Highlights, our user-friendly tool has got you covered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Navbar />
      {children}
    </main>
  );
}