import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { IconTheme } from "../components/icons/IconTheme";

type AppProviderProps = {
  children: React.ReactNode;
};

const MainErrorFallback = () => <div>Error</div>;
export type AppContextType = {
  iconTheme: [IconTheme, React.Dispatch<React.SetStateAction<IconTheme>>];
  toggleTheme: () => void;
};

export const AppContext = React.createContext<AppContextType | null>(null);

// Hook to use the context
export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(
      "EditContact subcomponents must be used within EditContact.Root",
    );
  }
  return context;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [iconTheme, setIconTheme] = React.useState(IconTheme.antd);
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const app: AppContextType = {
    iconTheme: [iconTheme, setIconTheme],

    toggleTheme: () => {
      console.log("toggleTheme", theme, theme === "dark");
      setTheme(theme === "dark" ? "light" : "dark");
    },
  };

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          Spinner
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <AppContext.Provider value={app}>{children}</AppContext.Provider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
