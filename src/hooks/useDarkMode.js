import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') return true;
      if (savedTheme === 'light') return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; 
  });


  useEffect(() => {
    const htmlIndex = document.querySelector('html');
    if (dark) {
      htmlIndex.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlIndex.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);


  function changeTheme() {
    setDark(prev => !prev);
  }

  return { dark, changeTheme };
}
