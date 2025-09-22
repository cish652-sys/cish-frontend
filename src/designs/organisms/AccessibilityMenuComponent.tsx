"use client";

import { useState, useEffect } from "react";
import { Logo } from "../atoms/Logo";

interface AccessibilityMenuProps {
  accessibility: string;
  onClose?: () => void;
}

export const AccessibilityMenu = ({ accessibility }: AccessibilityMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedFontLevel = localStorage.getItem("fontSizeLevel");
    
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      
      document.documentElement.style.backgroundColor = "#1a1a1a";
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "#ffffff";
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      
      document.documentElement.style.backgroundColor = "#ffffff";
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      
      if (!savedTheme) {
        localStorage.setItem("theme", "light");
      }
    }
    
    if (savedFontLevel) {
      const level = parseInt(savedFontLevel);
      setFontSizeLevel(level);
      applyFontSize(level);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest(".accessibility-menu")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const applyFontSize = (level: number) => {
    document.documentElement.classList.remove('text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl');
    
    switch (level) {
      case -2:
        document.documentElement.classList.add('text-xs');
        break;
      case -1:
        document.documentElement.classList.add('text-sm');
        break;
      case 0:
        document.documentElement.classList.add('text-base');
        break;
      case 1:
        document.documentElement.classList.add('text-lg');
        break;
      case 2:
        document.documentElement.classList.add('text-xl');
        break;
      default:
        document.documentElement.classList.add('text-base');
    }
  };

  const increaseFontSize = () => {
    const newLevel = Math.min(fontSizeLevel + 1, 2); // Max level 2
    setFontSizeLevel(newLevel);
    localStorage.setItem("fontSizeLevel", newLevel.toString());
    applyFontSize(newLevel);
  };

  const decreaseFontSize = () => {
    const newLevel = Math.max(fontSizeLevel - 1, -2); // Min level -2
    setFontSizeLevel(newLevel);
    localStorage.setItem("fontSizeLevel", newLevel.toString());
    applyFontSize(newLevel);
  };

  const resetFontSize = () => {
    setFontSizeLevel(0);
    localStorage.setItem("fontSizeLevel", "0");
    applyFontSize(0);
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      
      document.documentElement.style.backgroundColor = "#1a1a1a";
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "#ffffff";
      
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      
      document.documentElement.style.backgroundColor = "#ffffff";
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      
      localStorage.setItem("theme", "light");
    }
  };

  const getFontSizeDisplay = () => {
    switch (fontSizeLevel) {
      case -2: return 'XS';
      case -1: return 'S';
      case 0: return 'M';
      case 1: return 'L';
      case 2: return 'XL';
      default: return 'M';
    }
  };

  return (
    <div className="accessibility-menu relative">
      <button
        onClick={toggleMenu}
        aria-label="Accessibility Options"
        className="focus:outline-none focus:ring-2 focus:ring-primary rounded"
      >
        <Logo src={accessibility} alt="Accessibility" width={20} height={20} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          
          <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                  Accessibility Options
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Text Size
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Current: {getFontSizeDisplay()}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={decreaseFontSize}
                      disabled={fontSizeLevel <= -2}
                      className={`px-3 py-1 text-sm font-bold border rounded transition-colors ${
                        fontSizeLevel <= -2
                          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                      aria-label="Decrease text size"
                    >
                      A-
                    </button>
                    <button
                      onClick={resetFontSize}
                      className={`px-3 py-1 text-sm font-bold border rounded transition-colors ${
                        fontSizeLevel === 0
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                      aria-label="Reset text size"
                    >
                      A
                    </button>
                    <button
                      onClick={increaseFontSize}
                      disabled={fontSizeLevel >= 2}
                      className={`px-3 py-1 text-sm font-bold border rounded transition-colors ${
                        fontSizeLevel >= 2
                          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                      aria-label="Increase text size"
                    >
                      A+
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Click multiple times to increase/decrease more
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Theme
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Dark Mode:</span>
                  <button
                    onClick={toggleTheme}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      isDark ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"
                    }`}
                    aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isDark ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};