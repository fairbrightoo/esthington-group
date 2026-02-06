import React, { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, Theme } from './settings/types';
import { RESIHLandingPage } from './components/generated/RESIHLandingPage';
import { Preloader } from './components/Preloader';
// %IMPORT_STATEMENT

let theme: Theme = 'dark';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const [isLoading, setIsLoading] = React.useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  const generatedComponent = useMemo(() => {
    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    return <RESIHLandingPage />; // %EXPORT_STATEMENT%
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <Preloader onComplete={handlePreloaderComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full"
        >
          {container === 'centered' ? (
            <div className="h-full w-full flex flex-col items-center justify-center">
              {generatedComponent}
            </div>
          ) : (
            generatedComponent
          )}
        </motion.div>
      )}
    </>
  );
}

export default App;