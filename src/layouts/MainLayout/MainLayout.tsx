import { FooterComponent, HeaderComponent } from "./components";

interface Props {
  children: JSX.Element;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />
      <div className="bg-[#8354] grow">{children}</div>
      <FooterComponent />
    </div>
  );
};
