import { ThemeProvider } from "@/contexts";
import { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
