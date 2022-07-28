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
import { useState } from "react";
// import { Input } from "@olympusdao/component-library";
import { Container, useMediaQuery, Typography, Box, FormControl, InputAdornment, Input } from "@material-ui/core";

const transforRoad = (arr: any) => {
  const tempArr = [...arr];
  const tempItem = tempArr[3];
  tempArr[3] = tempArr[5];
  tempArr[5] = tempItem;
  return tempArr;
};

export function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");

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

  const roadMap = [
    {
      name: t`Q2 2022`,
      list: [
        {
          item: t`Launch of Meta Bitcoin`,
          done: true,
        },
        {
          item: t`BTCZ Foundation`,
          done: true,
        },
        {
          item: t`BTCZ roadshow debut`,
          done: true,
        },
      ],
      grid: 4,
    },
    {
      name: t`Q3 2022`,
      list: [
        {
          item: t`BTCZ miner M-1 series release`,
          done: true,
        },
        {
          item: t`Web3 DApp & NFT market launch`,
          done: true,
        },
        {
          item: t`BTCZ genesis block; first BTCZ mined`,
          done: true,
        },
        {
          item: t`Listing on DEX`,
          done: true,
        },
        {
          item: t`External audits`,
          done: true,
        },
      ],
      grid: 4,
    },
    {
      name: t`Q4 2022`,
      list: [
        {
          item: t`Metabitcointalk.com the world's first Web3 forum for BTCZ`,
          done: false,
        },
        {
          item: t`BTCZ pool P-1 series release`,
          done: false,
        },
        {
          item: t`Mining UX improvement`,
          done: false,
        },
        {
          item: t`Airdrops platform & app`,
          done: false,
        },
        {
          item: t`Listing on major exchanges`,
          done: false,
        },
      ],
      grid: 4,
    },
    {
      name: t`Q1 2023`,
      list: [
        {
          item: t`Development of payment use cases`,
          done: false,
        },
        {
          item: t`Intense marketing & community push`,
          done: false,
        },
        {
          item: t`BTCZ DeFi launch`,
          done: false,
        },
      ],
      grid: 4,
    },
    {
      name: t`Q2 2023`,
      list: [
        {
          item: t`Staking & Mining related products`,
          done: false,
        },
        {
          item: t`Development of FPGA miner`,
          done: false,
        },
        {
          item: t`Development of ASIC miner`,
          done: false,
        },
      ],
      grid: 4,
    },
    {
      name: t`Q3 2023`,
      list: [
        {
          item: t`wMBTC token launch`,
          done: false,
        },
        {
          item: t`BTCZ cross chain bridge `,
          done: false,
        },
        {
          item: t`Integration with DeFi applications`,
          done: false,
        },
      ],
      grid: 4,
    },
    {
      name: t`Q4 2023`,
      list: [
        {
          item: t`BTCZ mining in 3D metaverse`,
          done: false,
        },
        {
          item: t`BTCZ metaverse ecosystem launch`,
          done: false,
        },
        {
          item: t`Support BTCZ DeFi/GameFi/SocialFi applications`,
          done: false,
        },
      ],
      grid: 6,
    },
    {
      name: t`H1 2024`,
      list: [
        {
          item: t`1T market cap`,
          done: false,
        },
        {
          item: t`BTCZ investment fund and trust`,
          done: false,
        },
        {
          item: t`Expand BTCZ metaverse to art, finance, entertainment, and tech`,
          done: false,
        },
      ],
      grid: 6,
    },
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
  const transforedRoadMap = transforRoad(roadMap);
  const [link, setLink] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const handleChangeLink = (e: any) => {
    setLink(e.target.value);
  };
  const handleChangeAdress = (e: any) => {
    setAddress(e.target.value);
  };
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
                nftLisf.map((item, index) => {
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
                        <p className="content_bottom">{item.price} QUINT</p>
                      </div>
                      <div className="buy_box">
                        <button>Buy Now</button>
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
              <p className="first">Total rewards</p>
              <p className="second">
                <span className="number">11,566</span>
                <span className="cont">QUINT</span>
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
                          type="number"
                          value={link}
                          onChange={e => handleChangeLink(e)}
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
                        <Input id="address" type="number" value={address} onChange={e => handleChangeAdress(e)} />
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="second_line third_line">
                  <p className="title_second">Referral rewards</p>
                  <div className="content_box">
                    <div className="left_cont">
                      <div className="top_con add_margin">
                        <p className="num">0000</p>
                        <p className="num name">Berus</p>
                      </div>
                      <div className="top_con">
                        <p className="num">0000</p>
                        <p className="num name">Qunint</p>
                      </div>
                    </div>
                    <div className="right_cont">Claim rewards</div>
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
      <div className="block4">
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
      </div>
    </div>
  );
}
