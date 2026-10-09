import type { Metadata } from "next";
import { Work_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "CheckMate Landscaping | Lawn Care, Sod & Patios in Brantford, Ontario",
  description:
    "Lawn care, aeration, fertilizing, sod installation, patio design and snow removal for homes and businesses in Brantford and the surrounding area. 5.0 stars on Google. Call or text Easton at (519) 732-6885 for a free quote.",
  openGraph: {
    title: "CheckMate Landscaping | Brantford Lawn Care, Sod & Patios",
    description: "Free quotes on lawn care, sod, patios and snow removal in Brantford. Call or text (519) 732-6885.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${workSans.variable} ${source.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
