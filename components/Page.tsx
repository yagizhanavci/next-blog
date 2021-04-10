import { Footer, Header } from "@/components";

interface IPageProps {}

export const Page: React.FC<IPageProps> = ({ children }) => {
  return (
    <div className="root">
      <div className="container">
        <Header />
        <div className="flex flex-col flex-grow content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
