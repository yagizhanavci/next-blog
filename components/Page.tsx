interface IPageProps {}

export const Page: React.FC<IPageProps> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black min-w-screen min-h-screen">
      <div className="max-w-2xl mx-auto">{children}</div>
    </div>
  );
};
