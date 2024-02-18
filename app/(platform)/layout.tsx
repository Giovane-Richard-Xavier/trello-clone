import { ClerkProvider } from "@clerk/nextjs";

type TPlatformLayout = {
  children: React.ReactNode;
};

const PlatformLayout = ({ children }: TPlatformLayout) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
