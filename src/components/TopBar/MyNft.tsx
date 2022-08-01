import { Button } from "@material-ui/core";
import "./TopBar.scss";
import { t } from "@lingui/macro";
import { useState, useEffect } from "react";
import MaskGroup1 from "../../assets/images/Mask_Group.png";
import MaskGroup2 from "../../assets/images/Mask_Group2.png";
import MaskGroup3 from "../../assets/images/Mask_Group3.png";
import { Nft_ADDRESS, Nft_ABI } from "src/contract";
import { useWeb3Context } from "src/hooks/web3Context";
import { CUR_NETWORK_ID } from "src/constants/network";
import { error, info } from "../../slices/MessagesSlice";
import { useDispatch } from "react-redux";
import { bnToNum } from "src/helpers";
import { ethers } from "ethers";
function MyNft() {
  const [nftBlance, setNftBalance] = useState<number>(0);
  const [isShowNft, setShowNft] = useState(false);
  const [loading, setLoading] = useState(false);
  const { connected, provider, address, connect, networkId } = useWeb3Context();
  const signer = provider.getSigner();
  const dispatch = useDispatch();
  const showNft = () => {
    if (!connected) {
      connect();
    } else {
      setShowNft(!isShowNft);
    }
  };
  const list = [
    {
      img: MaskGroup1,
      grade: 1,
      number: 3,
    },
    {
      img: MaskGroup2,
      grade: 1,
      number: 3,
    },
    {
      img: MaskGroup3,
      grade: 1,
      number: 3,
    },
    {
      img: MaskGroup1,
      grade: 1,
      number: 3,
    },
    {
      img: MaskGroup1,
      grade: 1,
      number: 3,
    },
    {
      img: MaskGroup2,
      grade: 1,
      number: 3,
    },
    {
      img: MaskGroup3,
      grade: 1,
      number: 3,
    },
    {
      img: MaskGroup1,
      grade: 1,
      number: 3,
    },
  ];
  const fetchBalanceOf = async () => {
    setLoading(true);
    try {
      const getBalanceInfo = new ethers.Contract(Nft_ADDRESS, Nft_ABI, signer);
      const tx = await getBalanceInfo.balanceOf(address);
      const banlance = tx;
      setNftBalance(bnToNum(banlance));
      setLoading(false);
      dispatch(info(t`Success to getBalanceInfo`));
    } catch (err) {
      console.log({ err });
      setLoading(false);
      dispatch(error(t`Fail to getBalanceInfo`));
    }
  };
  useEffect(() => {
    if (provider && networkId === CUR_NETWORK_ID) {
      // 执行合约操作
      fetchBalanceOf();
    }
  }, [connected]);
  return (
    <div className="nft_container">
      <Button className="wallet_btn nft_btn" onClick={showNft}>
        {t`My Nft:`}
        {` `}
        {nftBlance || 0}
      </Button>

      <div className={isShowNft ? "nft_content open_nft" : "nft_content"}>
        <ul>
          {list &&
            list.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.img} />
                  <p>
                    NTF Grade：<span>{item.grade}</span>
                  </p>
                  <p>
                    NTF Number：<span>{item.number}</span>
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default MyNft;
