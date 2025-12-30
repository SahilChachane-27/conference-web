import type {Metadata} from 'next';
import { Inter, Farsan, Old_Standard_TT } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const farsan = Farsan({ weight: "400", subsets: ['latin'], variable: '--font-farsan' });
const oldStandardTT = Old_Standard_TT({ weight: ["400", "700"], subsets: ['latin'], variable: '--font-old-standard-tt' });


export const metadata: Metadata = {
  title: 'SustainTechCon 2026',
  description: '1st International Conference on Sustainable Technologies and Intelligent Systems',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${farsan.variable} ${oldStandardTT.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
