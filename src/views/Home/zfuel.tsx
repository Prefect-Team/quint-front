import "./styles.scss";
import { useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const srcollToAnchor = (anchorName: string) => {
  if (anchorName) {
    const anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }
};

export function ZFuel() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (hash) {
      srcollToAnchor(hash);
    }
  }, [location]);

  return (
    <div className={isSmallScreen ? "isMobile" : ""}>
      <div className="block1 zfuel">
        <div className="video_box">
          <video
            src={window.location.origin + (isSmallScreen ? "/zfuel_phone.mp4" : "/zfuel.mp4")}
            muted
            autoPlay
            loop
            playsInline={true}
            controls={false}
            className="coin-vedio"
          ></video>
        </div>
        <div className="word_box">
          <p className="title">ZFUEL</p>
          <p className="content">ZFuel is the energy resource for mining in the metaverse</p>
        </div>
      </div>
    </div>
  );
}
