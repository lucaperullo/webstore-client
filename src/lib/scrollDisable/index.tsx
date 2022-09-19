import React from "react";

export default function ScrollDisable() {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      // enable scrolling on unmount
      document.body.style.overflow = "unset";
    };
  }, []);

  return null;
}
