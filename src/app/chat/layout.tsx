import Menu from "@/composants/app/menu/menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-blue-200 w-screen h-screen">
      <div className="h-screen-[10vh]">
        <Menu />
      </div>
      <div className="w-full h-screen-[90vh] px-4">{children}</div>
    </div>
  );
}
