import React from "react";
// import { nicolette_video } from "../assets/nicolette_video.mp4";
import nicolettevideo from "../assets/nicolettevideo.mp4";

const NicoletteVideo = () => {
  return (
    <video width="full" height="full" autoPlay loop muted>
      <source src={nicolettevideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default NicoletteVideo;
