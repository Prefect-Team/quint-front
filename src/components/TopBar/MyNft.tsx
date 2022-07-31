import { Button } from "@material-ui/core";
import { useNftBalance } from "src/hooks/useNftBalance";
import "./TopBar.scss";
import { t } from "@lingui/macro";
import { useState } from "react";
import MaskGroup1 from "../../assets/images/Mask_Group.png";
import MaskGroup2 from "../../assets/images/Mask_Group2.png";
import MaskGroup3 from "../../assets/images/Mask_Group3.png";
function MyNft() {
  const [nftBlance] = useNftBalance();
  const [isShowNft, setShowNft] = useState(false);
  const showNft = () => {
    setShowNft(!isShowNft);
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
