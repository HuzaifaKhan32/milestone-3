import AboutHeader from "../components/AboutHeader";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`montserrat-regular`}>
        <AboutHeader />
          {children}
        </body>
      </html>
    );
  }