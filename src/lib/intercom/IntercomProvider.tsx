import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { useEffect } from "react";

import {
  boot as bootIntercom,
  load as loadIntercom,
  update as updateIntercom,
} from "./intercom";

export interface IntercomProviderProps {
  bootParams: Intercom_.IntercomSettings;
  children: ReactNode;
}

export const IntercomProvider = ({
  bootParams,
  children,
}: IntercomProviderProps) => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    bootIntercom(bootParams);
    loadIntercom();
  }

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined") {
        updateIntercom();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return children;
};
