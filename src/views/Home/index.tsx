import "./styles.scss";
import { t } from "@lingui/macro";

import PartnerBitcoin from "../../assets/images/bitmain-logo.png";
import PartnerBitmain from "../../assets/images/new-binance-chain-logo.png";
import PartnerUniswap from "../../assets/images/pancakeswaplogo-freelogovectors.png";
import PartnerCoinGecko from "../../assets/images/bitcoin-logo-png.png";
import PartnerLbank from "../../assets/images/lbank-logo-freelogovectors.png";
import PartnerBinance from "../../assets/images/Binance-Logo.png";
import PartnerCoinMarketCap from "../../assets/images/CMC-02.png";
import PartnerAlawad from "../../assets/images/coingecko-logo-white.png";
import Partner1inch from "../../assets/images/linch_logo.png";
import PartnerCertik from "../../assets/images/certik.png";
import PartnerShark from "../../assets/images/sharkteam.png";

import nftImg1 from "../../assets/images/Mask_Group.png";
import nftImg2 from "../../assets/images/Mask_Group2.png";
import nftImg3 from "../../assets/images/Mask_Group3.png";
import humanImg from "../../assets/images/human.png";
import bigImg from "../../assets/images/big_bgblock.png";
import phoneBigImg from "../../assets/images/phone_centerbg.png";

import firstWork from "../../assets/images/Composition_04.png";
import secondWork from "../../assets/images/Composition_13.png";
import thirdWork from "../../assets/images/Composition_11.png";
import forthWork from "../../assets/images/Composition_06.png";
import { useEffect, useState } from "react";
import {
  Container,
  useMediaQuery,
  Typography,
  Box,
  FormControl,
  InputAdornment,
  Input,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { CUR_NETWORK_ID } from "src/constants/network";
import { useWeb3Context } from "src/hooks/web3Context";
import { useHistory, useLocation } from "react-router-dom";
import { error, info } from "../../slices/MessagesSlice";
import { useDispatch } from "react-redux";
import { Referral_ADDRESS, Referral_ABI, ERC20_ABI } from "src/contract";
import { ethers } from "ethers";
import { bnToNum, formatMBTC } from "src/helpers";
import BN from "bignumber.js";

export function Home() {
  const maxInt = new BN("2").pow(new BN("256").minus(new BN("1")));
  const history = useHistory();
  const location = useLocation();
  const search = location.search.split("?")[1];
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const { connected, provider, address, networkId } = useWeb3Context();
  const signer = provider.getSigner();
  // usePathForNetwork({ pathName: "home", networkID: networkId, history });

  const paperHandler = () => {
    window.open(window.location.origin + "/whitepaper.pdf");
  };

  const partners = [
    "",
    PartnerBitcoin,
    PartnerBitmain,
    // PartnerPancake,
    PartnerUniswap,
    PartnerCoinGecko,
    PartnerLbank,
    PartnerBinance,
    PartnerCoinMarketCap,
    PartnerAlawad,
    Partner1inch,
    PartnerCertik,
    PartnerShark,
  ];

  const nftLisf = [
    { img: nftImg1, price: "5000.00" },
    { img: nftImg2, price: "4000.00" },
    { img: nftImg3, price: "6000.00" },
  ];
  const forthList = [
    {
      num: "25%",
      price: "0",
    },
    {
      num: "30%",
      price: "2",
    },
    {
      num: "35%",
      price: "4",
    },
    {
      num: "40%",
      price: "8",
    },
    {
      num: "45%",
      price: "16",
    },
    {
      num: "50%",
      price: "32",
    },
    {
      num: "55%",
      price: "64",
    },
    {
      num: "60%",
      price: "128",
    },
    {
      num: "80%",
      price: "256",
    },
    {
      num: "100%",
      price: "512",
    },
  ];
  const workList = [
    {
      img: firstWork,
      steps: "Step 1",
      title: "Connect wallet",
      content: ["Copywriting", "Copywriting", "Copywriting"],
    },
    {
      img: secondWork,
      steps: "Step 2",
      title: "Buy Quint on Pancakeswap",
      content: ["Copywriting", "Copywriting", "Copywriting"],
    },
    {
      img: thirdWork,
      steps: "Step 3",
      title: "Buy NFT using Quint",
      content: ["Copywriting", "Copywriting", "Copywriting"],
    },
    {
      img: forthWork,
      steps: "Step 4",
      title: "Refer friends get rewards",
      content: ["Copywriting", "Copywriting", "Copywriting"],
    },
  ];
  const [link, setLink] = useState<string>("");
  const [urlAddress, setAddress] = useState<string>("");
  const [linkParam, setLinkParam] = useState<string>("");
  const [share, setShare] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [shareNume, setShareNume] = useState(0);
  const [nftListPrice, setNftListPrice] = useState<Array<string>>([]);
  const [referralCode, setReferralCode] = useState<string>("");
  const [ERC20Address, setERC20Address] = useState("");
  const dispatch = useDispatch();
  const handleChangeLink = (e: any) => {
    setLink(e.target.value);
  };
  const handleChangeAdress = (e: any) => {
    setAddress(e.target.value);
  };

  // 拿到nft价格
  const getPrice = async (type: Array<string>) => {
    setLoading(true);
    try {
      // await checkMfuelApproved();
      const fetchPriceContract = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
      Promise.all([
        fetchPriceContract.fetchPrice(type[0]),
        fetchPriceContract.fetchPrice(type[1]),
        fetchPriceContract.fetchPrice(type[2]),
      ])
        .then(res => {
          console.log(res, "==-");
          const priceList = res.map(item => formatMBTC(bnToNum(item)));
          setNftListPrice(priceList);
        })
        .catch(err => {
          setLoading(false);
          dispatch(error(t`Fail to fetchPrice`));
        });
      setLoading(false);
      // dispatch(info(t`Success to fetchPrice`));
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to fetchPrice`));
    }
  };
  // 获取用户信息
  const getUserInfo = async () => {
    setLoading(true);
    console.log(loading, "loading");
    try {
      // 用户信息
      const fetchUserInfo = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
      const tx = await fetchUserInfo.fetchUserData(address);
      console.log(tx, "userinfo", loading);
      const code = bnToNum(tx.Parent).toString();
      const share = formatMBTC(bnToNum(tx.Share));
      const shareNume = bnToNum(tx.Sale);
      setShareNume(shareNume);
      setShare(share);
      setLinkParam(code);
      setLoading(false);
      // dispatch(info(t`Success to unstake`));
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to fetchUserInfo`));
    }
  };

  // 获取推荐人信息
  const getRerferralInfo = async () => {
    const fetchUserInfo = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
    const tx = await fetchUserInfo.fetchUserData(search);
    const level = bnToNum(tx.Level).toString();
    if (!level) {
      setReferralCode("master");
    } else {
      setReferralCode(search);
    }
  };
  // 获取推荐码
  const getAddress = async () => {
    setLoading(true);
    try {
      const fetchAdress = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
      const tx = await fetchAdress.fetchMasterAddress();
      console.log(tx, "address");
      setReferralCode(tx);
      // const code = bnToNum(tx.Parent).toString();
      // const share = bnToNum(tx.Share).toString();
      setLoading(false);
      // dispatch(info(t`Success to unstake`));
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to fetchUserInfo`));
    }
  };
  //提取分红
  const getWithdraw = async () => {
    setLoading(true);
    try {
      const shareWithdrawInfo = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
      const tx = await shareWithdrawInfo.shareWithdraw();
      setLoading(false);
      dispatch(info(t`Success to shareWithdraw`));
      getUserInfo();
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to shareWithdraw`));
    }
  };
  // 买入NFT
  const buyNft = async (type: string) => {
    console.log(type, "type");
    setLoading(true);
    try {
      const PurchaseInfo = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
      let ercaddress = "";
      if (!ERC20Address) {
        ercaddress = await PurchaseInfo.fetchPaytype();
        console.log(ercaddress, "txOne");
        setERC20Address(ercaddress);
      }
      const approvalInfo = new ethers.Contract(ERC20Address || ercaddress, ERC20_ABI, signer);

      const allowance = await approvalInfo.allowance(address, Referral_ADDRESS);
      if (bnToNum(allowance) === 0) {
        const txTwo = await approvalInfo.approve(Referral_ADDRESS, maxInt.c?.join(""));
        const txCB = await txTwo.wait();
        if (txCB.status) {
          // const url = referralCode;
          console.log(referralCode, type);
          const tx = await PurchaseInfo.Purchase(referralCode, type);
        }
      } else {
        const tx = await PurchaseInfo.Purchase(referralCode, type);
      }

      setLoading(false);
      getUserInfo();
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to shareWithdraw`));
    }
  };

  useEffect(() => {
    if (provider && networkId === CUR_NETWORK_ID && address) {
      // 执行合约操作
      getPrice(["1", "2", "3"]);
      getUserInfo();
      if (!search) {
        getAddress();
      } else {
        getRerferralInfo();
      }
    }
  }, [connected]);
  return (
    <div className={isSmallScreen ? "isMobile" : ""}>
      <div className="block1">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "0rem" : "2rem",
            paddingRight: isSmallScreen || isVerySmallScreen ? "0rem" : "2rem",
            paddingTop: isSmallScreen || isVerySmallScreen ? "0rem" : "3rem",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1120px",
          }}
        >
          <Box className="box_contianer" display="flex" justifyContent="flex-start" flexDirection="row">
            <div className="left">
              <Typography className="mbtc-txt add_margin">BE A QUINTER!</Typography>
              <Typography className="mbtc-txt">INVEST IN THE FUTURE...</Typography>
              <button>Buy on Pancakeswap</button>
              <p className="bottom_arrow"></p>
            </div>
          </Box>
        </Container>
      </div>
      <div className="block2">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            paddingRight: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            paddingTop: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1120px",
          }}
        >
          <div className="top_container">
            <div className="left_box">
              <p className="title">NFT MarketPlace</p>
              <p className="content">We've got everything you need to start trading.</p>
            </div>
            {isSmallScreen || isVerySmallScreen ? null : <div className="right_box">View more</div>}
          </div>
          <div className="bottom_container">
            <ul>
              {nftLisf &&
                nftLisf.map((item: any, index: number) => {
                  return (
                    <li key={index}>
                      <div className="top_li">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="middle_li">
                        <div className="left_middle">
                          <img src={humanImg} alt="" />
                        </div>
                        <div className="right_middle">
                          <p className="top_right">Bitcoin -Limited Edition</p>
                          <p className="bottom_right">Created By Calvin </p>
                        </div>
                      </div>
                      <div className="bottom_li">
                        <p className="title_bottom">Current Price</p>
                        <p className="content_bottom">{nftListPrice[index]} QUINT</p>
                      </div>
                      <div className="buy_box">
                        <button onClick={() => buyNft((index + 1).toString())}>Buy Now</button>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          {isSmallScreen || isVerySmallScreen ? <div className="phone_right_box">View more</div> : null}
        </Container>
      </div>
      <div className="block3">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            paddingRight: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            paddingTop: isSmallScreen || isVerySmallScreen ? "0rem" : "3rem",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1120px",
          }}
        >
          <img src={isSmallScreen || isVerySmallScreen ? phoneBigImg : bigImg} alt="" />
        </Container>
      </div>
      <div className="block2 other_box">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            paddingRight: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            paddingTop: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1120px",
          }}
        >
          <div className="top_container">
            <div className="left_box">
              <p className="title">Referral</p>
              <p className="content">VERY GOAL HAS ITS OWN PATH TO SUCCESS</p>
            </div>
          </div>
          <div className="bottom_container">
            <div className="top_word">
              <p className="first">Total Referral</p>
              <p className="second">
                <span className="number">{shareNume}</span>
                <span className="cont"></span>
              </p>
              <p className="third">
                You're earning of the trading fees your <br />
                referrals pay. Learn more
              </p>
            </div>
            <div className="center_content">
              <div className="add_phone_bg">
                <p className="title">Invite friends to earn money</p>
                <div className="second_line">
                  <div className="left">
                    <p className="title_second">Referral link</p>
                    <div className="input_box link_box">
                      <FormControl className="slippage-input add_icon" variant="outlined" color="primary" size="small">
                        <Input
                          id="link"
                          value={"quint.io?referral=" + referralCode}
                          onChange={e => handleChangeLink(e)}
                          // disabled
                          startAdornment={
                            <InputAdornment position="start">
                              <span style={{ color: "#58BD7D" }}>https://</span>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="left">
                    <p className="title_second">Referral code</p>
                    <div className="input_box">
                      <FormControl className="slippage-input" variant="outlined" color="primary" size="small">
                        <Input id="address" value={referralCode} onChange={e => handleChangeAdress(e)} />
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="second_line third_line">
                  <p className="title_second">Referral rewards</p>
                  <div className="content_box">
                    <div className="left_cont">
                      <div className="top_con add_margin">
                        <p className="num">{share}</p>
                        <p className="num name">quint</p>
                      </div>
                      {/* <div className="top_con">
                        <p className="num">0000</p>
                        <p className="num name">Quint</p>
                      </div> */}
                    </div>
                    <div className="right_cont" onClick={getWithdraw}>
                      Claim rewards
                    </div>
                  </div>
                </div>
              </div>

              <div className="forth_line">
                <div className="add_phone_bg">
                  <p className="title">Referral Percentage</p>
                  <ul>
                    {forthList &&
                      forthList.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className="top_cont">
                              <p className="left">Rank{index + 1}</p>
                              <p className="right">{item.num}</p>
                            </div>
                            <div className="top_cont bottom_cont">
                              <p className="left">Target</p>
                              <p className="right">
                                <span className="price_color">{item.price}</span>
                                <span className="quint_color">Quint</span>
                              </p>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="action_conatiner">
              <button className="waller_box">My wallet</button>
              <button className="confirm_box">CONFIRM</button>
            </div> */}
            <div className="foot_cont">
              <div className="contanier">
                <p className="title">BEFORE YOU START</p>
                <div className="request">
                  <p className="cont">
                    1. Download Dapp Wallet app or extension
                    <br />
                    2. Switch to Binance Smart Chain Network
                    <br />
                    3. Transfer BNB tokens to your Quint wallet
                    <br />
                    4. Get an invitation code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* <div className="block4">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "0rem" : "2rem",
            paddingRight: isSmallScreen || isVerySmallScreen ? "0rem" : "2rem",
            paddingTop: isSmallScreen || isVerySmallScreen ? "0rem" : "3rem",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1120px",
          }}
        >
          <p className="big_title">How it work</p>
          <p className="contro">Provide you with a convenient and fast way to make money</p>
          {isSmallScreen || isVerySmallScreen ? (
            <div className="phone_content_box">
              <ul>
                {workList &&
                  workList.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="top_img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="steps">{item.steps}</div>
                        <div className="bottom_con">
                          <p className="title">{item.title}</p>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ) : (
            <div className="content_box">
              <ul>
                {workList &&
                  workList.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="top_img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="steps">{item.steps}</div>
                        <div className="bottom_con">
                          <p className="title">{item.title}</p>
                          {item.content.map((ite, inx) => {
                            return (
                              <p key={inx + "con"} className="sub_title">
                                {ite}
                              </p>
                            );
                          })}
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </Container>
      </div> */}
      <Backdrop open={loading} className="loading_box">
        <CircularProgress color="inherit" />
        <Typography variant="h5" style={{ marginLeft: "1rem" }}>
          {t`Communicating with blockchain nodes...`}
        </Typography>
      </Backdrop>
    </div>
  );
}
