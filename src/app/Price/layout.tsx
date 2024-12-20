import AboutHeader from "../components/AboutHeader";
import MobileNavbar from "../components/MobileNavbar2";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`montserrat-regular`}>
        <AboutHeader />
        <MobileNavbar />
          {children}
        </body>
      </html>
    );
  }