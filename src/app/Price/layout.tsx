import AboutHeader from "../components/AboutHeader";
import MobileNavbar from "../components/MobileNavbar2";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className={`montserrat-regular w-full min-h-screen`}>
        <AboutHeader />
        <MobileNavbar />
          {children}
        </div>
    );
  }