import { Trans } from "@lingui/macro";
import { Box, Button, Divider, IconButton, Typography, useMediaQuery, useTheme, withStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
// import { Icon } from "@olympusdao/component-library";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { t } from "@lingui/macro";
import {
  MBTCStaking_ABI,
  MBTCStaking_ADDRESS,
  mBTC_ADDRESS,
  MFuel_ABI,
  mFuel_ADDRESS,
  NFTMiner_ADDRESS,
} from "src/contract";
import { useAppSelector, useWeb3Context } from "src/hooks";
import useCurrentTheme from "src/hooks/useTheme";
import MbtcIcon from "../../../assets/icons/wallet_btczlogo.png";
import NtfIcon from "../../../assets/icons/ntf_btczlogo.png";
import MFuelIcon from "../../../views/TreasuryDashboard/assets/mfuel-logo2.png";
import WalletAddressEns from "./WalletAddressEns";
import { useMBTCPrice } from "src/hooks/useProtocolMetrics";
import { formatNumber } from "../../../helpers";
import { useDispatch } from "react-redux";
import { Encrypt } from "src/helpers/aes";
import baseUrl from "src/helpers/baseUrl";
const DisconnectButton = () => {
  const { disconnect } = useWeb3Context();
  return (
    <Button onClick={disconnect} className="disconnectd_btn" variant="contained" size="large" color="secondary">
      <Trans>Disconnect</Trans>
    </Button>
  );
};

const CloseButton = withStyles(theme => ({
  root: {
    ...theme.overrides?.MuiButton?.containedSecondary,
    width: "30px",
    height: "30px",
  },
}))(IconButton);

const WalletTotalValue = () => {
  const { address: userAddress, provider, networkId, providerInitialized, connected } = useWeb3Context();
  const signer = provider.getSigner();
  const isLoading = useAppSelector(s => s.app.loading);
  const marketPrice = useAppSelector(s => s.app.marketPrice || 0);
  const [currency, setCurrency] = useState<"USD" | "OHM">("USD");
  const [mbtcBalance, setMbtcBalance] = useState<string>("0");
  const [mfuelBalance, setMfuelBalance] = useState<string>("0");
  const [num, setNum] = useState<number>(0);
  const dispatch = useDispatch();

  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");

  const getMBTCToken = async () => {
    try {
      const mbtcContract = new ethers.Contract(mBTC_ADDRESS, MFuel_ABI, signer);
      const tx = await mbtcContract.balanceOf(userAddress);
      const mbtcBalance = (tx / Math.pow(10, 18)).toFixed(2);
      setMbtcBalance(mbtcBalance || "0");
    } catch (err) {
      console.log(err);
    }
  };

  const getMfuel = async () => {
    try {
      const mfuelContract = new ethers.Contract(mFuel_ADDRESS, MFuel_ABI, signer);
      const tx = await mfuelContract.balanceOf(userAddress);
      const mfuelBalance = (tx / Math.pow(10, 18)).toFixed(2);
      setMfuelBalance(mfuelBalance || "0");
    } catch (err) {
      console.log(err);
    }
  };

  /** nft质押中的数量 **/
  const minerAmountOf = async (address: string) => {
    try {
      const mbtcStakingContract = new ethers.Contract(MBTCStaking_ADDRESS, MBTCStaking_ABI, signer);
      const res = await mbtcStakingContract.minerAmountOf(address);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const getNftNum = async () => {
    try {
      if (!userAddress) {
        return;
      }
      const centralApi = `${baseUrl}/system/open/api/nft/owner/detail`;
      const {
        data: { total },
      } = await fetch(centralApi, {
        method: "post",
        body: JSON.stringify({
          sign: "",
          data: Encrypt({
            contract: NFTMiner_ADDRESS,
            address: userAddress,
          }),
        }),
        headers: {
          "content-type": "application/json",
        },
      }).then(res => {
        return res.json();
      });
      const stakedNum = await minerAmountOf(userAddress);
      setNum(total + Number(stakedNum));
    } catch (err) {
      console.log({ err });
    }
  };

  const mbtcPrice = useMBTCPrice().data || 0;

  useEffect(() => {
    try {
      if (provider && userAddress && networkId === 56) {
        getMBTCToken();
        getMfuel();
        getNftNum();
      }
    } catch (err) {
      console.log(err);
    }
  }, [networkId, connected]);

  return (
    <Box className="tooBar-container toobar_container" onClick={() => setCurrency(currency === "USD" ? "OHM" : "USD")}>
      <WalletAddressEns />
      <Typography variant="h3" style={{ fontWeight: 700, color: "#fff", cursor: "pointer" }} className="tooBar-price">
        {!isLoading ? (
          `$ ${formatNumber(mbtcPrice * Number(mbtcBalance), 2)}`
        ) : (
          <Skeleton variant="text" width={"100%"} />
        )}
      </Typography>
      <div className="address-list">
        <div className="address-list-item">
          <div className="first_item">
            <img src={MbtcIcon} className="icon" />
            <div className="name">{t`BTCZ`}</div>
          </div>
          <div className="count-only">{mbtcBalance}</div>
          {/* <div className="value">≈$10000</div> */}
        </div>
        <div className="address-list-item">
          <div className="first_item">
            <img src={MFuelIcon} className="icon" />
            <div className="name">{t`ZFUEL`}</div>
          </div>
          <div className="count-only">{mfuelBalance}</div>
          {/* <div className="value">≈$10000</div> */}
        </div>
        <div className="address-list-item">
          <div className="first_item">
            <img src={NtfIcon} className="icon" />
            <div className="name">{t`NFT Miner`}</div>
          </div>
          <div className="count-only">{num}</div>
        </div>
      </div>
    </Box>
  );
};

function InitialWalletView({ onClose }: { onClose: () => void }) {
  const theme = useTheme();
  const [currentTheme] = useCurrentTheme();
  const { networkId } = useWeb3Context();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Box className="init_container">
      <Box sx={{ padding: theme.spacing(0, 3), display: "flex", flexDirection: "column" }} className="init_box">
        <Box
          className="toolBar-title"
          sx={{ display: "flex", justifyContent: "space-between", padding: theme.spacing(3, 0) }}
        >
          <Typography variant="h1" component="div" style={{ color: "#25EDBC", fontWeight: "800", fontSize: "22px" }}>
            {t`My Wallet`}
          </Typography>
          {/* <CloseButton className="toolBar-close" size="small" onClick={onClose} aria-label="close wallet">
            <Icon name="x" />
          </CloseButton> */}
        </Box>
        <WalletTotalValue />
        <Box sx={{ margin: theme.spacing(2, -3) }}>
          <Divider color="secondary" />
        </Box>
        <Box sx={{ marginX: "auto" }} style={{ display: "flex", justifyContent: "center" }}>
          <DisconnectButton />
        </Box>
      </Box>
    </Box>
  );
}

export default InitialWalletView;
