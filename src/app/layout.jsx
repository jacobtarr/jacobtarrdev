import Head from "next/head";
import Script from "next/script";
import "./globals.css";
import localFont from "next/font/local";
import Sidebar from "@/components/sidebar";
import Navigation from "@/components/Navigation";

const inter = localFont({
  src: [
    {
      path: "../fonts/inter/InterVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/inter/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Jacob Tarr - Web Developer",
  description:
    "Passionate front end web developer with a focus and expertise in developing production-ready Wordpress and Craft CMS sites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-YB85B6WMPT"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YB85B6WMPT');
          `,
        }}
      />
      <body className="bg-gray-100 text-sm antialiased">
        <div className="mx-auto my-4 max-w-xl px-4 lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Sidebar />
            <div className="space-y-4 lg:col-span-2">
              <Navigation />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
