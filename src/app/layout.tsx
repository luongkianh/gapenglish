import type { Metadata } from "next";
import localFont from "next/font/local";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const fzCatComic = localFont({
  src: "../../public/FzCatComic.ttf",
  variable: "--font-fz-cat-comic",
});

const baloo2 = Baloo_2({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "600", "800"],
  variable: "--font-baloo2",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "GAP English - Anh ngữ Ms. Loan",
    description:
      "Fill the English Gap - Trung tâm Anh ngữ hiện đại tại Kiên Giang",
    openGraph: {
      images: ["/images/logo.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/images/logo.jpg"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={cn(
        "h-full",
        "antialiased",
        fzCatComic.variable,
        baloo2.variable,
        "font-fz-cat-comic"
      )}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
