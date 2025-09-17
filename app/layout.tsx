import "./globals.css";
export const metadata = { title: "Rasike Abeyratne — Portfolio" };
export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="en"><body className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-900 antialiased">{children}</body></html>);
}
