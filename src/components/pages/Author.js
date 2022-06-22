import React, { useEffect, useState } from "react";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useParams } from "@reach/router";
import Clock from "../components/Clock";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

const AudioStyled = styled.audio`
    width: 0;
    height: 0;
    position: absolute;
`;

const Colection = function() {
  const [openMenu, setOpenMenu] = React.useState(true);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [ author, setAuthor ] = React.useState();
  const params = useParams();
  const [ audioPlayingId, setAudioPlayingId ] = useState();

  useEffect(() => {
    const { id } = params;
    // const id = 2;
    const author = authors.find((item) => item.id === Number(id));
    setAuthor(author);
  }, []);

  const handleBtnClick = (): void => {
    setOpenMenu(!openMenu);
    setOpenMenu1(false);
    setOpenMenu2(false);
    document.getElementById("Mainbtn").classList.add("active");
    document.getElementById("Mainbtn1").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
  };
  const handleBtnClick1 = (): void => {
    setOpenMenu1(!openMenu1);
    setOpenMenu2(false);
    setOpenMenu(false);
    document.getElementById("Mainbtn1").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
  };
  const handleBtnClick2 = (): void => {
    setOpenMenu2(!openMenu2);
    setOpenMenu(false);
    setOpenMenu1(false);
    document.getElementById("Mainbtn2").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn1").classList.remove("active");
  };


  const authors = [
    {
        id: 1,
        name: "ApeDrops",
        twitter: "@apedrops",
        twitterLink: "",
        walletAddress: "",
        avatar: "",
        numberFollowers: 267,
        audios: [
            {
                src: "./audio/Rollin.mp3",
                id: 1,
                name: "Rollin",
                price: "",
                background: "",
                createdAt: ""
            },
            {
                src: "./audio/Rollin.mp3",
                id: 1,
                name: "Rollin",
                price: "",
                background: "",
                createdAt: ""
            },
            {
                src: "./audio/Rollin.mp3",
                id: 1,
                name: "Rollin",
                price: "",
                background: "",
                createdAt: ""
            }
        ]
    },
    {
        id: 2,
        name: "Crypto Raiders",
        twitter: "@cryptoraiders",
        twitterLink: "",
        walletAddress: "",
        avatar: "/img/author/CryptoRaiders.png",
        numberFollowers: 268,
        audios: [
            {
                src: "/audio/cryptoRaiders/LastCallAtTheDrunkenFairy.mp3",
                id: 1,
                name: "Last call at the drunken fairy",
                price: "",
                background: "/img/collections/cryptoRaiders/CryptoRaiders.png",
                createdAt: "",
                likes: 12,
                bid: "",
                deadline:"December, 30, 2021",
            },
            {
                src: "/audio/cryptoRaiders/BladeInTherDrak.mp3",
                id: 2,
                name: "Blade in the Dark",
                price: "",
                background: "/img/collections/cryptoRaiders/CryptoRaiders.png",
                createdAt: "",
                likes: 12,
                bid: "1/12",
                deadline:"December, 30, 2021",
            },
            {
                src: "/audio/cryptoRaiders/CryptOfDreams.wav",
                id: 3,
                name: "Crypto of dreams",
                price: "",
                background: "/img/collections/cryptoRaiders/CryptoRaiders.png",
                createdAt: "",
                likes: 12,
                bid: "",
                deadline:"December, 30, 2021",
            },
            {
                src: "/audio/cryptoRaiders/Incomming.mp3",
                id: 3,
                name: "Incomming",
                price: "",
                background: "/img/collections/cryptoRaiders/CryptoRaiders.png",
                createdAt: "",
                likes: 12,
                bid: "",
                deadline:"December, 30, 2021",
            },
            {
                src: "/audio/cryptoRaiders/LostTheForest.mp3",
                id: 3,
                name: "Lost the forest",
                price: "",
                background: "/img/collections/cryptoRaiders/CryptoRaiders.png",
                createdAt: "",
                likes: 19,
                bid: "",
                deadline:"December, 30, 2021",
            },
            {
                src: "/audio/cryptoRaiders/WeAreRaiders.wav",
                id: 3,
                name: "We are raiders",
                price: "",
                background: "/img/collections/cryptoRaiders/CryptoRaiders.png",
                createdAt: "",
                likes: 32,
                bid: "",
                deadline:"December, 30, 2021",
            }
        ]
    },
    {
        id: 3,
        name: "Ape Drops",
        twitter: "@apedrops",
        twitterLink: "",
        walletAddress: "",
        avatar: "/img/author/apeDrops.png",
        numberFollowers: 426,
        audios: [
            {
                src: "/audio/apeDrops/FoolinYaself.mp3",
                id: 301,
                name: "Foolin Yaself",
                price: "",
                background: "/img/collections/apeDrops/FoolinYaself.png",
                createdAt: "",
                likes: 12,
                bid: "",
                deadline:"December, 30, 2021",
            },
        ]
    },
    {
        id: 4,
        name: "Ape Drops",
        twitter: "@apedrops",
        twitterLink: "",
        walletAddress: "",
        avatar: "/img/author/apeDrops.png",
        numberFollowers: 426,
        audios: [
            {
                src: "/audio/apeDrops/FoolinYaself.mp3",
                id: 301,
                name: "Foolin Yaself",
                price: "",
                background: "/img/collections/apeDrops/FoolinYaself.png",
                createdAt: "",
                likes: 12,
                bid: "",
                deadline:"December, 30, 2021",
            },
        ]
    }
  ];

  const playAudio = (audioId) => {
    const audio = document.getElementById(`audio-${audioId}`);

    if (audioPlayingId) {
        if (audioId === audioPlayingId) {
            audio.pause();
            // this.setState({ ...this.state, audioPlayingId: "" });
            setAudioPlayingId(audioId);
        } else {
            const currentAudio = document.getElementById(`audio-${audioPlayingId}`);
            currentAudio.pause();
            audio.play();
            setAudioPlayingId(audioId);
            // this.setState({ ...this.state, audioPlayingId: audioId });
        }
    } else {
        audio.play();
        setAudioPlayingId(audioId);
        // this.setState({ ...this.state, audioPlayingId: audioId });
    }
  }

const nftCardItem = (nft, index) => (
    <div key={index} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="nft__item">
            { nft.deadline &&
                <div className="de_countdown">
                    <Clock deadline={nft.deadline} />
                </div>
            }
            <div className="author_list_pp">
                <span onClick={()=> window.open(nft.authorLink, "_self")}>                                    
                    <img className="lazy" src={author.avatar} alt=""/>
                    <i className="fa fa-check"></i>
                </span>
            </div>
            <div className="nft__item_wrap" style={{height: `${200}px`}}>
                <Outer>
                    <div className="g-relative">
                        <img src={nft.background} className="lazy nft__item_preview" alt=""/>
                        <span className="icon-play" onClick={() => playAudio(nft?.id)}>
                            <span aria-hidden="true" className={nft?.id === audioPlayingId ? 'icon_pause' : 'arrow_triangle-right'}></span>
                        </span>
                        <AudioStyled id={`audio-${nft?.id}`} controls >
                            <source
                                src={nft?.src || ""}
                                type="audio/mpeg"
                            />
                        </AudioStyled>
                    </div>
                </Outer>
            </div>
            <div className="nft__item_info">
                <span onClick={()=> window.open(nft.nftLink, "_self")}>
                    <h4>{nft.name}</h4>
                </span>
                <div className="nft__item_price">
                    {nft.price}<span>{nft.bid}</span>
                </div>
                <div className="nft__item_action">
                    <span onClick={()=> window.open(nft.bidLink, "_self")}>Place a bid</span>
                </div>
                <div className="nft__item_like">
                    <i className="fa fa-heart"></i><span>{nft.likes}</span>
                </div>                            
            </div> 
        </div>
    </div> 
)

return (
<div>
<GlobalStyles/>

  <section className='container no-bottom'>
    <div className='row'>
      <div className='spacer-double'></div>
      <div className="col-md-12">
         <div className="d_profile de-flex">
              <div className="de-flex-col">
                  <div className="profile_avatar">
                      <img src={author?.avatar} alt=""/>
                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                          <h4>
                              {author?.name}
                              <span className="profile_username">{author?.twitter}</span>
                              {/* <span id="wallet" className="profile_wallet">DdzFFzCqrhshMSxb9oW3mRo4MJrQkusV3fGFSTwaiu4wPBqMryA9DYVJCkW9n7twCffG5f5wX2sSkoDXGiZB1HPa7K7f865Kk4LqnrME</span> */}
                              {/* <button id="btn_copy" title="Copy Text">Copy</button> */}
                          </h4>
                      </div>
                  </div>
              </div>
              <div className="profile_follow de-flex">
                  <div className="de-flex-col">
                      <div className="profile_follower">{author?.numberFollowers} followers</div>
                  </div>
                  <div className="de-flex-col">
                      <span className="btn-main">Follow</span>
                  </div>
              </div>

          </div>
      </div>
    </div>
  </section>

    <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12'>
              <div className="items_filter">
                <ul className="de_nav text-left">
                    <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>On Sale</span></li>
                    {/* <li id='Mainbtn1' className=""><span onClick={handleBtnClick1}>Created</span></li>
                    <li id='Mainbtn2' className=""><span onClick={handleBtnClick2}>Liked</span></li> */}
                </ul>
            </div>
          </div>
        </div>
        <div className='row'>
            {
                author?.audios?.map((item, index) => nftCardItem(item, index))
            }
        </div>
    </section>

  <Footer />
</div>
);
}
export default Colection;