import { useEffect, useState } from 'react';

export function useThemeDetector() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // DON'T use getCurrentTheme initially

  useEffect(() => {
    const getCurrentTheme = () =>
      document.documentElement.classList.contains('dark');

    // Set initial theme
    setIsDarkTheme(getCurrentTheme());

    // Watch for changes
    const observer = new MutationObserver(() => {
      setIsDarkTheme(getCurrentTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return isDarkTheme;
}
