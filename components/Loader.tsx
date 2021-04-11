import * as React from "react";

interface ILoaderProps {}

export const Loader: React.FC<ILoaderProps> = () => {
  return (
    <div className="flex items-center justify-center flex-grow w-full h-full loader-container">
      <div className="flex items-center p-5 space-x-3 bg-transparent rounded-full loader">
        <div className="w-5 h-5 bg-indigo-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-indigo-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-indigo-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};
