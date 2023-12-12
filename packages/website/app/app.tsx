"use client";

import { ModalManager, ThemeProvider } from "postshape";

import Desktop from "./desktop";
import { Media, MediaContextProvider } from "./media";
import Mobile from "./mobile";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ModalManager>
        <MediaContextProvider>
          <Media lessThan="sm">
            <Mobile>{children}</Mobile>
          </Media>
          <Media greaterThanOrEqual="sm">
            <Desktop>{children}</Desktop>
          </Media>
        </MediaContextProvider>
      </ModalManager>
    </ThemeProvider>
  );
}
