import { useState, useEffect, useCallback } from "react";

const useImagenResponsive = (imagenPathGrande, imagenPathPequeno) => {
 const [imagenPath, setImagenPath] = useState("");

 const handleResize = useCallback(() => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 600) {
   setImagenPath(imagenPathGrande);
  } else {
   setImagenPath(imagenPathPequeno);
  }
 }, [imagenPathGrande, imagenPathPequeno]);

 useEffect(() => {
  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, [handleResize]);

 return imagenPath;
};

export default useImagenResponsive;