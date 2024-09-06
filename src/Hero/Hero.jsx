import { useEffect, useRef } from "react";

import Three from "./Three.jsx";

function Hero() {
  const refContainer = useRef(null);
  useEffect(() => {
    Three(refContainer);
  }, []);

  return <div ref={refContainer}></div>;
}

export default Hero;
