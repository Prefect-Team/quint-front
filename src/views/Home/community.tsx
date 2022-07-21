import "./styles.scss";
import { useEffect } from "react";
import { Container, useMediaQuery } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import ContentImg from "../../assets/images/right_content.png";
const srcollToAnchor = (anchorName: string) => {
  if (anchorName) {
    const anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }
};

export function Community() {
  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (hash) {
      srcollToAnchor(hash);
    }
  }, [location]);
  const list = [
    {
      listTitle: "Latest",
      date: "Jun 27",
      imgUrl: ContentImg,
      title: "STORE OF VALUE IN METAVERSE",
      content:
        "Bitcoin Zero uses peer-to-NFT technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins zero is carried out collectively by the network. Bitcoin zero is open-source; its design is public, nobody owns or controls Bitcoin zero and everyone can take part. Through many of its unique properties, Bitcoin zero allows exciting uses that could not be covered by any previous payment system.",
    },
  ];
  return (
    <div className={isSmallScreen ? "isMobile" : ""}>
      <div className="block1 community">
        <Container
          style={{
            paddingLeft: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
            paddingRight: isSmallScreen || isVerySmallScreen ? "1rem" : "3rem",
            paddingTop: isSmallScreen || isVerySmallScreen ? "6rem" : "13rem",
            position: "relative",
          }}
          className="community_container"
        >
          <div className="left_community_box"></div>
          {isSmallScreen || isVerySmallScreen ? (
            <div className="right_community_box">
              <div className="right_community_conent">
                <div className="content_container_box">
                  {list &&
                    list.map((item, index) => {
                      return (
                        <div key={index} className="content_container">
                          <div className="content_top">
                            <p>{item.listTitle}</p>
                          </div>
                          <div className="bottom_content">
                            <div className="left">
                              <div className="date_box">
                                <p className="month">{item.date.split(" ")[1]}</p>
                                <p className="date">{item.date.split(" ")[0]}</p>
                              </div>
                              <div className="left_img"></div>
                            </div>
                            <div className="right">
                              <div className="right_text">
                                <p className="title">{item.title}</p>
                                <p className="text">{item.content}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            <div className="right_community_box">
              {/* <div className="title_box"></div> */}
              <div className="right_community_conent">
                <div className="content_container_box">
                  {list &&
                    list.map((item, index) => {
                      return (
                        <div key={index} className="content_container">
                          <div className="content_top">
                            <p>{item.listTitle}</p>
                          </div>
                          <div className="bottom_content">
                            <div className="left">
                              <p className="month">{item.date.split(" ")[1]}</p>
                              <p className="date">{item.date.split(" ")[0]}</p>
                            </div>
                            <div className="right">
                              <div className="left_img"></div>
                              <div className="right_text">
                                <p className="title">{item.title}</p>
                                <p className="text">{item.content}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
