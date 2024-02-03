import type { Metadata } from "next";
import Description from "./description";

export const metadata: Metadata = {
  title: "Instant Downloader videos  ",
  description:
    "Instagram Downloader | Unlock the full potential of your Instagram experience with our versatile Instagram Downloader! Whether you're looking to save captivating videos, stunning images, engaging Reels, profile pictures (DP), captivating Stories, or eye-catching Highlights, our user-friendly tool has got you covered.",
};

export default function RootLayout({
  video,
  children,
}: Readonly<{
  children: React.ReactNode;
  video: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col overflow-hidden">
      {children}
      <Description />
    </main>
  );
}
