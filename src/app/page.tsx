import FullPageScroll from "../components/FullPageScroll";
import { ThemeProvider } from "../components/theme-provider";

export default function Home() {
  return (
    <main>
      <ThemeProvider>
        <FullPageScroll />
      </ThemeProvider>
    </main>
  );
}
