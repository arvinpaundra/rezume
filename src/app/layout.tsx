import '@/styles/globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "hi, i'm arvinpaundra",
  description: "Welcome to Arvin's rezume website.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={jetbrains.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
