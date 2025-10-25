import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Mueve el scroll al inicio
  }, [pathname]); // se ejecuta cada vez que cambia la ruta

  return null; // no renderiza nada visual
}
