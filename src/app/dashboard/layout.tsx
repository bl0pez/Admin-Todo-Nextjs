import { Sidebar } from "@/components/Sidebar";
import { TopMenu } from "@/components/TopMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className=" bg-white p-4 m-2 rounded">{children}</div>
      </div>
    </>
  );
}
