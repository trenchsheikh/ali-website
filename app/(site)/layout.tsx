import SiteLayout from "@/components/SiteLayout";

export default function SiteGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteLayout>{children}</SiteLayout>;
}
