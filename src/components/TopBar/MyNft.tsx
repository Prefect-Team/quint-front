import { Link } from "@material-ui/core";
import { useNftBalance } from "src/hooks/useNftBalance";
import "./TopBar.scss";
import { t } from "@lingui/macro";
function MyNft() {
  const [nftBlance] = useNftBalance();
  return (
    <Link href="#/mynft" underline="none" className="btcz-btn-gradient change_padding">
      {t`My Nft:`}
      {` `}
      {nftBlance || 0}
    </Link>
  );
}

export default MyNft;
