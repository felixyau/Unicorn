import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
      isDesktop: true,
    };
  }
  const { innerWidth: width, innerHeight: height } = window;
  const isDesktop = innerWidth > 768;
  return {
    width,
    height,
    isDesktop,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
