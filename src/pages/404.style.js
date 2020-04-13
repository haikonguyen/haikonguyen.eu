import styled from 'styled-components';

const FourOFourWrap = styled.div`
  background: linear-gradient(
    177deg,
    rgba(2, 26, 54, 1) 0%,
    rgba(3, 24, 53, 1) 73%
  );

  height: 85vh;

  @media ${props => props.theme.screen.laptopL} {
    @keyframes rocket-movement {
      100% {
        transform: translate(60px, -100px);
      }
    }
  }

  @keyframes spin-earth {
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
      transition: transform 20s;
    }
  }

  @keyframes move-astronaut {
    100% {
      transform: translate(-160px, -160px);
    }
  }

  @keyframes rotate-astronaut {
    100% {
      transform: rotate(-720deg);
    }
  }

  @keyframes glow-star {
    40% {
      -webkit-opacity: 0.3;
      opacity: 0.3;
    }
    90%,
    100% {
      -webkit-opacity: 1;
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
      border-radius: 999999px;
    }
  }

  .spin-earth-on-hover {
    transition: ease 200s !important;
    transform: rotate(-3600deg) !important;
  }

  .starsWrap {
    background: url(http://salehriaz.com/404Page/img/overlay_stars.svg);
    background-repeat: repeat;
    background-size: contain;
    background-position: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      text-align: center;

      h1 {
        font-size: 80px;
        margin: 0;

        @media ${props => props.theme.screen.tablet} {
          font-size: 120px;
        }
      }

      .btn-go-home {
        position: relative;
        z-index: 200;
        margin: 15px auto;
        width: 100px;
        padding: 10px 15px;
        border: 1px solid #ffcb39;
        border-radius: 100px;
        font-weight: 400;
        display: block;
        color: white;
        text-align: center;
        text-decoration: none;
        letter-spacing: 2px;
        font-size: 11px;

        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        -ms-transition: all 0.3s ease-in;
        -o-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;

        :hover {
          background-color: #ffcb39;
          color: #fff;
          transform: scale(1.05);
          box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
        }
      }
    }

    .objects {
      img {
        z-index: 90;
        pointer-events: none;
      }

      .object_rocket {
        display: none;

        @media ${props => props.theme.screen.laptopL} {
          z-index: 95;
          position: absolute;
          transform: translateX(-1000px);
          top: 75%;
          pointer-events: none;
          animation: rocket-movement 500s linear infinite both running;
          display: block;
        }
      }

      .object_earth {
        position: absolute;
        top: 20%;
        left: 15%;
        z-index: 90;
        animation: spin-earth 200s linear infinite both running;
      }

      .object_moon {
        position: absolute;
        top: 12%;
        left: 25%;
      }
    }

    .glowing_stars .star {
      position: absolute;
      border-radius: 100%;
      background-color: #fff;
      width: 3px;
      height: 3px;
      opacity: 0.3;
      will-change: opacity;
    }

    .glowing_stars .star:nth-child(1) {
      top: 80%;
      left: 25%;
      animation: glow-star 2s infinite ease-in-out alternate 1s;
    }
    .glowing_stars .star:nth-child(2) {
      top: 20%;
      left: 40%;
      animation: glow-star 2s infinite ease-in-out alternate 3s;
    }
    .glowing_stars .star:nth-child(3) {
      top: 25%;
      left: 25%;
      animation: glow-star 2s infinite ease-in-out alternate 5s;
    }
    .glowing_stars .star:nth-child(4) {
      top: 75%;
      left: 80%;
      animation: glow-star 2s infinite ease-in-out alternate 7s;
    }
    .glowing_stars .star:nth-child(5) {
      top: 90%;
      left: 50%;
      animation: glow-star 2s infinite ease-in-out alternate 9s;
    }

    .object_astronaut {
      animation: rotate-astronaut 200s infinite linear both alternate;
    }

    .box_astronaut {
      z-index: 110 !important;
      position: absolute;
      top: 60%;
      right: 20%;
      will-change: transform;
      animation: move-astronaut 50s infinite linear both alternate;
    }
  }

  @media only screen and (max-width: 600px) {
    .box_astronaut {
      top: 70%;
    }

    .content {
      padding-top: 25%;
    }
  }
`;

export default FourOFourWrap;
