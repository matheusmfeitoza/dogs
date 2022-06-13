import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    const verifyMedia = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };
    verifyMedia();
    window.addEventListener("resize", verifyMedia);
    return () => window.removeEventListener("resize", verifyMedia);
  }, [media]);
  return match;
};

export default useMedia;
