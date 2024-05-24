import { ThemeProvider } from "./components/theme-provider";
import Router from "./router/Router";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router />
    </ThemeProvider>
  )
}
