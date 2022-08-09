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

import nftImg1 from "../../assets/images/Mask_Group.jpg";
import nftImg2 from "../../assets/images/Mask_Group2.jpg";
import nftImg3 from "../../assets/images/Mask_Group3.jpg";
// import humanImg from "../../assets/images/human.png";
import bigImg from "../../assets/images/big_bgblock.png";
import phoneBigImg from "../../assets/images/phone_centerbg.png";

import firstWork from "../../assets/images/Composition_04.png";
import secondWork from "../../assets/images/Composition_13.png";
import thirdWork from "../../assets/images/Composition_11.png";
import forthWork from "../../assets/images/Composition_06.png";
import fifthWork from "../../assets/images/Composition_026.png";
import { useEffect, useState } from "react";
import {
  Container,
  useMediaQuery,
  Typography,
  Box,
  FormControl,
  // InputAdornment,
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
import { updateStatus } from "../../slices/UserInfo";
export function Home() {
  const maxInt = new BN("2").pow(new BN("256").minus(new BN("1")));
  const history = useHistory();
  const location = useLocation();
  const search = location.search.split("=")[1];
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const { connected, provider, address, networkId } = useWeb3Context();
  const signer = provider.getSigner();
  // usePathForNetwork({ pathName: "home", networkID: networkId, history });
  // console.log(address, "address");
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
      title: "First purchase input your referral address and confirm",
      content: ["Copywriting", "Copywriting", "Copywriting"],
    },
    {
      img: forthWork,
      steps: "Step 4",
      title: "Buy NFT using Quint",
      content: ["Copywriting", "Copywriting", "Copywriting"],
    },
    {
      img: fifthWork,
      steps: "Step 5",
      title: "Refer friends get rewards with your referral code",
      content: ["Copywriting", "Copywriting", "Copywriting"],
    },
  ];
  const [share, setShare] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [shareNume, setShareNume] = useState(0);
  const [nftListPrice, setNftListPrice] = useState<Array<string>>(["50", "100", "200"]);
  const [referralCode, setReferralCode] = useState<string>("");
  const [ERC20Address, setERC20Address] = useState("");
  const [actionStatus, setActionStatus] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleChangeAdress = (e: any) => {
    console.log(e, "123123");
    setReferralCode(e.target.value);
  };

  // 拿到nft价格
  const getPrice = async (type: Array<number>) => {
    setLoading(true);
    try {
      const fetchPriceContract = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
      console.log(fetchPriceContract, Referral_ADDRESS, "Referral_ADDRESS");
      const txList = await Promise.all([
        fetchPriceContract.fetchPrice(type[0]),
        fetchPriceContract.fetchPrice(type[1]),
        fetchPriceContract.fetchPrice(type[2]),
      ]);
      const priceList = txList.map(item => formatMBTC(bnToNum(item)));
      setNftListPrice(priceList);
      setLoading(false);
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
      if (code != "0") {
        setReferralCode(tx.Parent);
        setActionStatus(true);
      } else {
        setReferralCode("");
        setActionStatus(false);
      }
      setLoading(false);
      // dispatch(info(t`Success to unstake`));
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to fetchUserInfo`));
    }
  };
  // 设置父级邀请码
  const setParentCode = async () => {
    setLoading(true);
    try {
      const referralContract = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
      const tx = await referralContract.setParent(referralCode);
      console.log(tx, "[]==");
      if (tx) {
        // window.location.reload();
        // getUserInfo();
        setActionStatus(true);
      } else {
        dispatch(error(t`Fail to set referral address`));
      }
      setLoading(false);
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to setParent`));
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
  const getAddressCode = async () => {
    setLoading(true);
    try {
      const fetchAdress = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
      const tx = await fetchAdress.fetchMasterAddress();
      console.log(tx, "tuijian", referralCode);
      setReferralCode(tx);
      setLoading(false);
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
    console.log(type, "type", referralCode);
    if (!connected) {
      dispatch(error(t`please connect wallet first`));
    } else {
      setLoading(true);
      if (!referralCode) {
        dispatch(error(t`please set referral address first`));
      } else {
        try {
          const PurchaseInfo = new ethers.Contract(Referral_ADDRESS, Referral_ABI, signer);
          let ercaddress = "";
          if (!ERC20Address) {
            ercaddress = await PurchaseInfo.fetchPaytype();
            console.log(ercaddress, "txOne");
            setERC20Address(ercaddress);
          }
          const approvalInfo = new ethers.Contract(ERC20Address || ercaddress, ERC20_ABI, signer);
          console.log(Referral_ADDRESS, address);
          const allowance = await approvalInfo.allowance(address, Referral_ADDRESS);
          if (bnToNum(allowance) === 0) {
            const txTwo = await approvalInfo.approve(Referral_ADDRESS, maxInt.c?.join(""));
            const txCB = await txTwo.wait();
            if (txCB.status) {
              const tx = await PurchaseInfo.Purchase(type);
              console.log(tx, "[]===");
            }
          } else {
            const tx = await PurchaseInfo.Purchase(type);
            console.log(tx, "购买成功");
          }
          dispatch(updateStatus());
          setLoading(false);
          getUserInfo();
          window.location.reload();
        } catch (err) {
          console.log({ err });
          setLoading(false);
          dispatch(error(t`Fail to Purchase`));
        }
      }
    }
  };
  const toSwap = () => {
    window.open("https://pancakeswap.finance/swap?outputCurrency=0x64619f611248256F7F4b72fE83872F89d5d60d64", "_blank");
  };
  useEffect(() => {
    if (provider && networkId === CUR_NETWORK_ID && address) {
      // 执行合约操作
      getPrice([1, 2, 3]);
      getUserInfo();
      // getAddressCode();
      // if (!search) {
      // } else {
      //   getRerferralInfo();
      // }
    }
  }, [connected]);
  return (
    <div className={isSmallScreen ? "isMobile" : ""}>
      <div className="block1" id="home">
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
              <button onClick={toSwap} className="open_SWAP">
                Buy on Pancakeswap
              </button>
              {/* <p className="bottom_arrow"></p> */}
            </div>
          </Box>
        </Container>
      </div>
      <div className="block2" id="marketPlace">
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
              <p className="content">
                Exclusive Referral NFTs Buy an exclusive NFT and get your referrals to purchase. Unlock crypto rewards!
              </p>
            </div>
            {/* {isSmallScreen || isVerySmallScreen ? null : <div className="right_box">View more</div>} */}
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
                        {/* <div className="left_middle">
                          <img src={humanImg} alt="" />
                        </div> */}
                        {/* <div className="right_middle">
                          <p className="top_right">Bitcoin -Limited Edition</p>
                          <p className="bottom_right">Created By Calvin </p>
                        </div> */}
                      </div>
                      <div className="bottom_li">
                        <p className="title_bottom">Current Price</p>
                        <p className="content_bottom">{nftListPrice[index]} Quint</p>
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
      <div className="block2 other_box" id="claim">
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
              <p className="content">Every goal has its own path to success</p>
            </div>
          </div>
          <div className="bottom_container">
            <div className="top_word">
              <p className="first">Total Referrals</p>
              <p className="second">
                <span className="number">{shareNume || 0}</span>
                <span className="cont"></span>
              </p>
              <p className="third">
                Earn fees on what your referrals <br />
                purchase and trade.
              </p>
            </div>
            <div className="center_content">
              <div className="add_phone_bg">
                <p className="title">Invite friends to earn money</p>
                <div className="second_line">
                  <div className="left">
                    <p className="title_second">MY Referral code</p>
                    <div className="input_box link_box1">
                      <FormControl className="slippage-input" variant="outlined" color="primary" size="small">
                        <Input id="link" value={address} disabled />
                      </FormControl>
                    </div>
                  </div>
                  <div className="left">
                    <p className="title_second">Your Referral AdDReSS</p>
                    <div className="input_box">
                      <FormControl className="slippage-input" variant="outlined" color="primary" size="small">
                        <Input
                          id="address"
                          placeholder="please input your referral address"
                          value={referralCode}
                          disabled={actionStatus}
                          onChange={e => handleChangeAdress(e)}
                        />
                      </FormControl>
                      <button
                        onClick={setParentCode}
                        disabled={actionStatus}
                        className={actionStatus ? "not_click" : "can_click"}
                      >
                        CONFIRM
                      </button>
                    </div>
                  </div>
                </div>
                <div className="second_line third_line">
                  <p className="title_second">Referral rewards</p>
                  <div className="content_box">
                    <div className="left_cont">
                      <div className="top_con add_margin">
                        <p className="num">{Math.floor(Number(share) * 0.9) || 0}</p>
                        <p className="num name">Quint</p>
                      </div>
                      <p className="reason_word">
                        Since QUINT has an expensive handling fee when transferring , the dividends that can be obtained
                        are different
                      </p>
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
                              <p className="left right">
                                <span className="price_color">{item.price}</span>
                              </p>
                              <p className="right">
                                {/* <span className="price_color"></span> */}
                                <span className="quint_color">QuintNFTs</span>
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
                    1. Connect wallet
                    <br />
                    2. Buy Quint on Pancakeswap
                    <br />
                    3. First purchase input your referral address and confirm
                    <br />
                    4. Buy NFT using Quint
                    <br />
                    5. Refer friends get rewards with your referral code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="about_box" id="about">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            paddingRight: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            paddingTop: isSmallScreen || isVerySmallScreen ? "0rem" : "0",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1120px",
          }}
        >
          <div className="content_container">
            <p className="title">About</p>
            <p className="subt_itle">CONNECTING THE METAVERSE TOTHE REAL WORLD --</p>
            <p className="content">
              <span>QUINT</span> has been commissioned by a team of investors who have strived to build a legacy
              ecosystem that reflects their accomplishments in life. While catering to the needs of like-minded
              connoisseurs through bringing to them a Boutique NFT Marketplace, Team Quint also wanted to give a taste
              of luxury to QUINT’s worldwide token holders through its revolutionary super-staking platform.
            </p>
            <p className="content">
              At <span>Quint</span>, we like to do things differently! That's why apart from the regular staking
              options, we are bringing to you Super-staking Pools. These pools will yield real-world incentives such as
              complimentary stays in your dream destinations, supercar experiences, discounts on property purchases,
              hotel bookings, restaurants, spas and much more while also offering breathtaking prizes through our Luxury
              Raffle Pools.
            </p>
            <p className="content">
              <span>QUINT's</span> boutique NFT Marketplace will allow connoisseurs from across the globe to not just
              get their tailor-made NFTs designed by creative minds with an inherent eye for luxury but also get those
              freshly minted NFTs installed into Token Frames and delivered to their doorsteps.
            </p>
            <p className="content">
              While building on the token's 'Super-staking Pools' concept, <span>QUINT</span> aims to add unique
              real-world collectibles to its treasury, the future upside of which will be distributed amongst the
              Super-staking Pool stakers. Another one of QUINT's key future goals is to develop luxury physical real
              estate and make the QUINT investors fractional owners in proportion of their investment in the Quint's
              DeFi ecosystem. These will be first of their kind DeFi usages in the crypto world and would ensure that
              the TVL of the Project has hard assets to boast of; not just borrowed tokens from a partner DeFi protocol!
            </p>
          </div>
        </Container>
      </div>
      <div className="block4" id="work">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "0rem" : "2rem",
            paddingRight: isSmallScreen || isVerySmallScreen ? "0rem" : "2rem",
            paddingTop: isSmallScreen || isVerySmallScreen ? "0rem" : "3rem",
            width: isSmallScreen || isVerySmallScreen ? "100%" : "1120px",
          }}
        >
          <p className="big_title">How it Works</p>
          <p className="contro">A fast way of earning rewards and making money!</p>
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
                          {/* {item.content.map((ite, inx) => {
                            return (
                              <p key={inx + "con"} className="sub_title">
                                {ite}
                              </p>
                            );
                          })} */}
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </Container>
      </div>
      <Backdrop open={loading} className="loading_box">
        <CircularProgress color="inherit" />
        <Typography variant="h5" style={{ marginLeft: "1rem" }}>
          {t`Communicating with blockchain nodes...`}
        </Typography>
      </Backdrop>
    </div>
  );
}
