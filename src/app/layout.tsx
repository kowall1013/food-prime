//Redux
import { ReduxProvider } from "./StoreProvider";
//Components
import { Header } from "./_layout/header/Header";
import { NavWrapper } from "./_layout/nav/NavWrapper";
//Styles
import "@/styles/globals.css";

export const metadata = {
  title: "Food prime",
  description: "Food prime app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ReduxProvider>
          <div className="grid grid-cols-[minmax(0,_1fr)] md:grid-cols-[300px_minmax(0,_1fr)]">
            <Header />
            <div className="col-span-1">
              <NavWrapper />
            </div>
            <main className="h-[calc(100vh-64px)]">{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
