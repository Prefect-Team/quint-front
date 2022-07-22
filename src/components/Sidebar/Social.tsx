import { Link, SvgIcon, useMediaQuery } from "@material-ui/core";
import { ReactComponent as Telegram } from "../../assets/images/telegram-line.svg";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Facebook } from "../../assets/images/Facebook.svg";
import { ReactComponent as Twitter } from "../../assets/images/Twitter.svg";
import { ReactComponent as Instagram } from "../../assets/images/Instagram.svg";

import React from "react";
import { useLocation } from "react-router-dom";
import "./Sidebar.scss";

const Social: React.FC = () => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const isHome = location.pathname.indexOf("home") > 0;

  return (
    <div className="social-row">
      <div className="social-row-icon add_margin">
        <Link href="https://metabitcointalk.com/" target="_blank" className="social-row-icon">
          <SvgIcon component={Facebook} />
        </Link>
      </div>
      <div className="social-row-icon add_margin">
        <Link href="https://twitter.com/MetaMBTC" target="_blank" className="social-row-icon">
          <SvgIcon component={Twitter} />
        </Link>
      </div>
      <div className="social-row-icon add_margin">
        <Link href="https://t.me/MBTC_Official_Channel" target="_blank" className="social-row-icon">
          <SvgIcon component={Instagram} />
        </Link>
      </div>
      <div className="social-row-icon add_margin">
        <Link href="https://github.com/meta-btc" target="_blank">
          <SvgIcon component={Github} />
        </Link>
      </div>
      <div className="social-row-icon add_margin">
        <Link href="https://medium.com/@MetaBitcoin" target="_blank" className="social-row-icon">
          <SvgIcon component={Telegram} />
        </Link>
      </div>
    </div>
  );
};

export default Social;
