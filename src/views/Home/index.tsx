import "./styles.scss";
import { Trans, t } from "@lingui/macro";
// import MetaBitcon from "../../assets/images/meta-bitcoin.png";
// import MetaBitconMobile from "../../assets/images/meta-bitcoin-mobile.png";

// import HugeDiamond from "../../assets/images/huge-diamond.png";
// import CardMBTC from "../../assets/images/card-mbtc.png";
// import CardMFUEL from "../../assets/images/card-mfuel.png";
// import CardMINER from "../../assets/images/card-miner.png";
// import CardPOOL from "../../assets/images/card-pool.png";

// import HugeDiamondGif from "../../assets/images/b_coins.gif";

import BtcZ from "../../assets/images/coinn.png";
import Fuel from "../../assets/images/fuel.png";
import NftMiner from "../../assets/images/miner1.png";
import NftPool from "../../assets/images/Daco.png";
import ExplorBg from "../../assets/images/Rectangle.png";

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

// import Social from "../../components/Sidebar/Social";

import { Container, useMediaQuery, Link, Typography, Button, Grid, Box } from "@material-ui/core";

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

  const transforedRoadMap = transforRoad(roadMap);

  return (
    <div className={isSmallScreen ? "isMobile" : ""}>
      <div className="block1">
        <div className="video_box">
          <video
            src={window.location.origin + (isSmallScreen ? "/phone_animation.mp4" : "/Homepage_animation.mp4")}
            muted
            autoPlay
            loop
            playsInline={true}
            controls={false}
            className="coin-vedio"
          ></video>
        </div>
        <Box className="social-link top_socia_link" display="flex" justifyContent="flex-start" flexDirection="column">
          <div className="txt_container">
            <Typography className="mbtc-txt">
              <Trans>Bitcoin zero is an innovative payment network and a new kind of money.</Trans>
            </Typography>
          </div>
          {/* <Social /> */}
        </Box>
      </div>
      <div className="block2">
        {/* <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
            paddingRight: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
            paddingTop: isSmallScreen || isVerySmallScreen ? "2rem" : "6rem",
            display: isSmallScreen ? "block" : "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        > */}
        <div className="block-left">
          {/* <img src={HugeDiamondGif} alt="" className="diamond-img" /> */}
          <video
            src={window.location.origin + "/logo_animation.mp4"}
            muted
            autoPlay
            loop
            playsInline={true}
            controls={false}
            className="logo-vedio"
          ></video>
        </div>
        <div className="block-right">
          <Typography variant="body1" align="left" className="wimb-text">
            {t`What is`} <br />
            {t`Bitcoin Zero?`}
          </Typography>
          <ul className="bitcoin-list">
            <li>
              <p>
                Bitcoin Zero uses peer-to-NFT technology to operate with no central authority or banks; managing
                transactions and the issuing of bitcoins zero is carried out collectively by the network. Bitcoin zero
                is open-source; its design is public, nobody owns or controls Bitcoin zero and everyone can take part.
                Through many of its unique properties, Bitcoin zero allows exciting uses that could not be covered by
                any previous payment system.
              </p>
            </li>
          </ul>
          <Box sx={{ display: { xs: "block", md: "flex" } }} className="opt-block">
            <Button className="download-btn" onClick={paperHandler}>
              <Typography>{t`Meta White Paper`}</Typography>
            </Button>
            {/* <div className="opt-list">
                <Link href="https://www.certik.com/projects/meta-bitcoin" target="_blank" className="opt-audit">
                  <img src={PartnerCertik} />
                </Link>
                <Link
                  href="https://www.sharkteam.org/report/audit/20220331002C_en.pdf"
                  target="_blank"
                  className="opt-audit"
                >
                  <img src={PartnerShark} />
                </Link>
              </div> */}
          </Box>
        </div>
        {/* </Container> */}
        <div className="bottom_bg"></div>
      </div>
      <div className="block3">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "0rem" : "3rem",
            paddingRight: isSmallScreen || isVerySmallScreen ? "0rem" : "3rem",
            paddingTop: isSmallScreen || isVerySmallScreen ? "0rem" : "4rem",
          }}
        >
          <Grid container spacing={isSmallScreen ? 3 : 8}>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                className="block-card block-card-first-line"
                href="#/economy#mbtc"
                underline="none"
                style={{
                  background: `url(${ExplorBg}) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <img src={BtcZ} alt="" className="btcz-img" />
                <Typography className="card-title">{t`BTCZ`}</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                className="block-card block-card-first-line"
                href="#/economy#mfuel"
                underline="none"
                style={{
                  background: `url(${ExplorBg}) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <img src={Fuel} alt="" className="Fuel-img" />
                <Typography className="card-title">{t`ZFUEL`}</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                className="block-card"
                href="#/economy#miner"
                underline="none"
                style={{
                  background: `url(${ExplorBg}) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <img src={NftMiner} alt="" className="NftMiner-img" />
                <Typography className="card-title">{t`NFT MINER`}</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Link
                className="block-card"
                href="#/economy#pool"
                underline="none"
                style={{
                  background: `url(${ExplorBg}) no-repeat`,
                  backgroundSize: "cover",
                }}
              >
                <img src={NftPool} alt="" className="NftMiner-img" />
                <Typography className="card-title">{t`NFT POOL`}</Typography>
              </Link>
            </Grid>
            <div className="explore_box">
              <Typography variant="h4" align="center" className="block-title explore">
                {t`Explore for more.`}
              </Typography>
            </div>
            <div className="bottom_bg"></div>
          </Grid>
        </Container>
      </div>
      <div className="block3 other_box">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
            paddingRight: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
            paddingTop: isSmallScreen || isVerySmallScreen ? "0rem" : "4rem",
          }}
        >
          <Typography variant="h4" align="center" className="block-title new_block_title">
            {t`Innovation in Payment Systems`}
          </Typography>
          <div className="content_tainer">
            <p className="system_content">
              BTCZ isn't just about sending money. It has many features and opens many possibilities that the community
              is still exploring. Here are some of the technologies currently being researched, and in some cases, being
              turned into real products and services. The most interesting uses of Bitcoin zero are probably still to be
              discovered.
            </p>
          </div>
          <ul className="system_nav">
            <li>
              <div className="top">
                <div className="left">Control against fraud</div>
                <div className="right"></div>
              </div>
              <p className="bottom_content">
                An unprecedented level of security is possible with Bitcoin zero. The network provides users with
                protection against most prevalent types of fraud like chargebacks or unwanted charges, and bitcoins are
                impossible to counterfeit. Users can backup or encrypt their wallets. Hardware wallets make it very
                difficult to steal or lose money. Bitcoin is designed to allow its users to have complete control over
                their money.
              </p>
            </li>
            <li>
              <div className="top">
                <div className="left">Global accessibility</div>
                <div className="right right2"></div>
              </div>
              <p className="bottom_content">
                With Bitcoin zero, all payments in the world can be fully interoperable. Bitcoin allows any bank,
                business or individual to securely send and receive payments anywhere at any time, with or without a
                bank account. Bitcoin is available in a large number of countries that still remain out of reach for
                most payment systems due to their own limitations. Bitcoin increases global access to commerce and it
                can help international trades to flourish.
              </p>
            </li>
            <li>
              <div className="top">
                <div className="left">Cost efficiency</div>
                <div className="right right3"></div>
              </div>
              <p className="bottom_content">
                With the use of cryptography, secure payments are possible without slow and costly middlemen. A Bitcoin
                transaction can be much cheaper than its alternatives and be completed in a short time. This means
                Bitcoin holds some potential to become a common way to transfer any currency in the future. BTCZ could
                also play a role in reducing poverty in many countries by cutting high transaction fees on workers'
                salary.
              </p>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
}
