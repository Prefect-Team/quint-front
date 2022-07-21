import { t } from "@lingui/macro";
// import { Button, SwipeableDrawer, Typography, useTheme, withStyles, useMediaQuery } from "@material-ui/core";
import { Button, Typography, useTheme, useMediaQuery } from "@material-ui/core";

import { useState } from "react";
import { useWeb3Context } from "src/hooks/web3Context";
import InitialWalletView from "./InitialWalletView";
import "./style.scss";

const WalletButton = ({ openWallet }: { openWallet: () => void }) => {
  const { connect, connected, address } = useWeb3Context();
  const onClick = connected ? openWallet : connect;
  const label = connected ? address.slice(0, 7) + "..." + address.slice(-4) : t`Connect Wallet`;
  const theme = useTheme();
  return (
    <Button className="btcz-btn-solid wallet_btn" onClick={onClick}>
      <Typography>{label}</Typography>
    </Button>
  );
};

// const StyledSwipeableDrawer = withStyles(theme => ({
//   root: {
//     width: "460px",
//     maxWidth: "100%",
//   },
//   paper: {
//     maxWidth: "100%",
//   },
// }))(SwipeableDrawer);

export function Wallet() {
  const [isWalletOpen, setWalletOpen] = useState(false);
  const closeWallet = () => setWalletOpen(false);
  const openWallet = () => setWalletOpen(!isWalletOpen);

  // only enable backdrop transition on ios devices,
  // because we can assume IOS is hosted on hight-end devices and will not drop frames
  // also disable discovery on IOS, because of it's 'swipe to go back' feat
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");

  return (
    <div className={isWalletOpen ? "wallet_box" : "wallet_box cancle_bg"}>
      <WalletButton openWallet={openWallet} />
      <div className={isWalletOpen ? "wallet_container open_wallet" : "wallet_container"}>
        <InitialWalletView onClose={closeWallet} />
      </div>
      {/* <StyledSwipeableDrawer
        disableBackdropTransition={!isIOS}
        disableDiscovery={isIOS}
        anchor={isSmallScreen || isVerySmallScreen ? "top" : "right"}
        open={isWalletOpen}
        onOpen={openWallet}
        onClose={closeWallet}
      >
        <InitialWalletView onClose={closeWallet} />
      </StyledSwipeableDrawer> */}
    </div>
  );
}

export default Wallet;
