import { useEffect, useState } from "react";
import { getRoute, type RouteName } from "./route";

export const useRoute = () => {
  const [route, setRoute] = useState<RouteName>(getRoute());

  useEffect(() => {
    const listener = () => setRoute(getRoute());

    window.addEventListener("route-change", listener);
    window.addEventListener("popstate", listener);

    return () => {
      window.removeEventListener("route-change", listener);
      window.removeEventListener("popstate", listener);
    };
  }, []);

  return route
};
