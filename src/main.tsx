import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"       // use dark for first-time visitors
    enableSystem={false}      // don't override default with system preference
    disableTransitionOnChange
  >
    <App />
  </ThemeProvider>
);
