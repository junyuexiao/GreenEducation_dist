<template>

  <div id="homeapp">

    <!-- <slider class="homeapp-swiper"
            animation="normal"
            stopOnHover
            height="60vh">
      <slider-item class="swiper-item"
                   v-for="(item, index) in list"
                   :key="index"
                   :style="{backgroundImage: 'url(' + item.coverImgUrl + ')'}">
      </slider-item>
    </slider> -->

    <section class="homeapp-swiper">
      <slider class="swiper"
              animation="normal"
              stopOnHover
              height="100vh">
        <slider-item class="swiper-item"
                     v-for="(item, index) in list"
                     :key="index"
                     :style="{backgroundImage: 'url(' + item.coverImgUrl + ')'}"
                     style="backgroundSize:cover">
          {{index}}
          <div class="slider-desc" v-if="index==0">Fighting bushfire misinformation, a game
            education website for 5.4 million people.</div>
          <div class="slider-desc" v-if="index==1">Since October 2019, Australia's bushfire
            have affected the hearts of people in
            Australia and even the world. But while
            caring about the fire, some misinformation
            appeared in some reports，especially
            websites. There are two sides of the
            argument, one side believes the primary
            cause of bushfires is climate change.
            The other side believes the primary cause
            of the fires is arson. By playing the game
            question, you could know the turth of
            Australian bushfire and climate change.</div>
        </slider-item>
        <div class="btn">Scroll for more</div>
        <div class="btn-arrow"></div>
      </slider>


    </section>


    <section class="row" :class="{'move': move}">

      <div class="step">
        <div class="title">Why play our game?</div>
        <div class="steps">
          <div class="stpe1 step-item">
            <div class="subtitle">step1</div>
          </div>
          <img src="./assets/arrow.png" alt="" class="arrow">
          <div class="step2 step-item">
            <div class="subtitle">step2</div>
          </div>
          <img src="./assets/arrow.png" alt="" class="arrow">

          <div class="step3 step-item">
            <div class="subtitle">step3</div>
          </div>
        </div>
      </div>


      <div class="vedio-content">
        <div class="cover-img">
          <div class="btn">||</div>
        </div>
      </div>


      <div class="homeapp-btn" @click="toGame()">
        <span>Play game </span><span>&nbsp;→</span>
      </div>


      <div class="homeapp-content">
        <div class="content-title">
          Know more abot puzzles
        </div>
        <div class="content-wrap">
          <div class="left" @click="toPuzzle()">Green Puzzles</div>
          <div class="mobileclass">
            <div class="center">
              <div class="top" @click="toPuzzle()">Yellow puzzles</div>
              <div class="bottom" @click="toPuzzle()">Red puzzles</div>
            </div>
            <div class="right" @click="toPuzzle()">
              <span> Orange <br>
                puzzles</span>
            </div>
          </div>
        </div>
        <div class="content-footer">
          Get diffrent levels of puzzles by playing rescue games,puzzles can be aynthesized to help improve climate warming
        </div>
      </div>


      <div class="homeapp-footer">
        <div class="footer-title">-- About us --</div>
        <div class="footer-content">
          <div class="content-top">
            <span>Policy</span>
            <span>Terms</span>
            <span>FAQS</span>
            <span>Support</span>
          </div>
          <div class="content-bottom ">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Youtube</span>
          </div>
        </div>
        <div class="footer-bar">@20xx SHILA</div>
      </div>
    </section>

  </div>

</template>

<script>
  import { Slider, SliderItem } from 'vue-easy-slider'
  export default {
    name: 'Home',
    components: {
      Slider,
      SliderItem,
    },
    data() {
      return {
        list: [
          { coverImgUrl: require('./assets/h0.png'), },
          { coverImgUrl: require('./assets/h1.png'), },
          // { coverImgUrl: require('../../assets/swiper/swiper_1.jpg'), },
        ],
        move: false
      }
    },
    methods: {
      toGame() {
        this.$router.push('/index/game')
      },
      toPuzzle() {
        this.$router.push('/index/puzzle')
      }
    },
  }
</script>

<style lang="less">
  #homeapp {
    max-width: 100vw;
    // overflow-x: hidden;

    @media screen and (max-width: 1024px) {

      margin-top: -2vh;
    }

    .homeapp-swiper {
      transition: height .8s linear;
      position: fixed;
      top: 0;
      height: 100vh;
      width: 100vw;

      .swiper {
        position: relative;

        .swiper-item {
          width: 100vw;
          // height: 80vh;
          display: block;
          background-size: contain;
          background-repeat: no-repeat;

          @media screen and (max-width: 1024px) {
            background-position: center center;
          }

          .slider-desc {
            margin: 10vh auto;
            padding: 5vw;
            color: #fff;
            font-weight: bold;

            @media screen and (min-width: 1024px) {
              display: none;
            }
          }
        }

        .btn {
          z-index: 333;
          position: absolute;
          bottom: 6%;
          font-weight: bolder;
          font-size: 22px;
          color: #fff;
          text-align: center;
          left: 45%;
          transform: translate(-10%, 0%);
          margin: 0 auto;

          @media screen and (max-width: 1024px) {

            transform: translate(-30%, 0%);

          }
        }

        .btn-arrow {
          position: absolute;
          bottom: 2%;
          z-index: 333;
          height: 20px;
          width: 160px;
          background: url('./assets/arrow1.png') 50% 50% no-repeat;
          background-size: contain;
          left: 45%;
          transform: translate(-10%, 0%);

          animation: theanimation1 5s infinite alternate;


          @media screen and (max-width:1024px) {
            left: 30%;
          }

          @keyframes theanimation1 {
            0% {
              transform: translateY(0);
            }

            25% {
              transform: translateY(10px);
            }

            50% {
              transform: translateY(0px);
            }

            75% {
              transform: translateY(10px);
            }

            100% {
              transform: translateY(0);
            }
          }
        }
      }


    }

    .row {
      transition: .8s all;
      background: #fff;
      transform: translateY(100vh);


      .step {
        height: 40vh;
        width: 100vw;

        .title {
          text-align: center;
          display: block;
          margin: 4vh auto;
          font-weight: bold;
          font-size: 33px;
        }

        .arrow {

          width: 60px;
          height: 60px;
          animation: theanimation 5s infinite alternate;

          @keyframes theanimation {
            0% {
              transform: translateX(0);
            }

            25% {
              transform: translateX(-10px);
            }

            50% {
              transform: translateX(10px);
            }

            75% {
              transform: translateX(20px);
            }

            100% {
              transform: translateX(0);
            }
          }

          @media screen and (max-width: 1024px) {
            width: 15px;
            height: 15px;
          }
        }

        .steps {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;

          .step-item {
            // background: #000;
            flex: 1;
            text-align: center;
            height: 100%;

            // border: 1px solid red;
            .subtitle {
              // color: #fff;
              font-weight: bolder;
            }
          }

          .stpe1 {
            background: url('./assets/step1-01.png') 50% 50% no-repeat;
            background-size: contain;
          }

          .step2 {
            background: url('./assets/step2-01.png') 50% 50% no-repeat;
            background-size: contain;
          }

          .step3 {
            background: url('./assets/step3-01.png') 50% 50% no-repeat;
            background-size: contain;
          }
        }
      }

      .vedio-content {
        height: 60vh;
        margin-top: 18vh;
        width: 100vw;
        background: url('./assets/swiper_1.jpg') 50% 50% no-repeat;
        background-size: cover;

        @media screen and (max-width: 1024px) {
          margin-top: 8vh;
          transform: translateX(3vw);
        }

        .cover-img {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, .4);
          position: relative;

          .btn {
            background: #fff;
            width: 80px;
            height: 80px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            color: rgba(117, 172, 96, 0.7);
            font-weight: 800;
            font-size: 22px;
            text-align: center;
            line-height: 80px;
          }
        }
      }

      .homeapp-btn {
        border: .2rem solid rgba(148, 168, 167, .7);
        height: 6vh;
        line-height: 6vh;
        font-weight: 700;
        color: rgba(148, 168, 167, 1);
        cursor: pointer;
        width: 10vw;
        margin-left: 77vw;
        margin-top: 5vh;
        transition: all .4s linear;

        @media screen and (max-width: 1024px) {
          margin: 0 auto;
          display: block;
          width: 110vw !important;
          text-align: left;
        }

        span:nth-child(1) {
          margin-left: .3rem;

          @media screen and (max-width: 1024px) {

            margin-left: -50vw;
          }

        }

        span:nth-child(2) {
          margin-left: 1rem;
          margin-right: .3rem;

          @media screen and (max-width: 1024px) {

            // display: none;
            visibility: hidden;
          }
        }

        &:hover {
          background: rgba(148, 168, 167, 1);
          color: #fff;
        }

        @media screen and (max-width: 1024px) {
          margin-top: 1vh;
          background: rgba(148, 168, 167, 1);
          color: #fff;
          margin-left: 0vw;
          width: auto;
          text-align: right;
        }

      }

      .homeapp-content {
        margin: 10vh 20vw;

        @media screen and (max-width: 1024px) {
          margin: 0 auto;
        }

        .content-title {
          letter-spacing: 2px;
          font-weight: 400;

          @media screen and (max-width: 1024px) {
            // text-align: center;
            display: inline-block;
            margin-left: 25vw;
            margin-top: 4rem;
            font-weight: bold;
          }

        }

        .content-wrap {
          margin-top: 5rem;
          display: flex;

          @media screen and (max-width: 1024px) {

            margin-top: 2rem;
            flex-direction: column;
            // padding: 0 5vw;
          }

          .mobileclass {
            display: flex;

            @media screen and (max-width: 1024px) {
              margin: 0;
              display: flex;
            }
          }

          .left {
            height: 24rem;
            width: 30rem;
            background: url('./assets/left.png') no-repeat;
            background-position: 0 0;
            background-size: cover;
            text-align: center;
            line-height: 24rem;
            font-weight: bolder;
            font-size: 1.5rem;
            cursor: pointer;
            transition: .4s all;

            &:hover {
              background-position: left center;
            }

            @media screen and (max-width: 1024px) {

              margin-top: 2rem;
              width: 90vw;
              margin-left: 6vw;
              height: 25rem;
              transform: translateX(3vw);
            }
          }




          .center {
            margin: 0 2rem;
            text-align: center;
            line-height: 11.5rem;
            font-weight: bolder;
            font-size: 1.5rem;
            color: #fff;

            @media screen and (max-width: 1024px) {
              width: 90vw;
              margin-left: 8vw;
              flex: 1;
            }

            .top {
              width: 13rem;
              height: 11.5rem;
              background: url('./assets/top.png') no-repeat;
              background-size: cover;
              margin-bottom: 1rem;
              cursor: pointer;
              transition: .4s all;

              &:hover {
                background-position: left center;
              }

              @media screen and (max-width: 1024px) {
                width: 11rem;
                margin-top: .4rem;
              }
            }

            .bottom {
              width: 15rem;
              height: 11.5rem;
              background: url('./assets/bottom.png')no-repeat;
              transition: .4s all;
              background-size: cover;
              cursor: pointer;
              margin-left: -2rem;

              &:hover {
                background-position: left center;
              }

              @media screen and (max-width: 1024px) {
                width: 14rem;
                // margin-top: 1.6rem;
              }
            }
          }

          .right {
            width: 13rem;
            height: 24rem;
            background: url('./assets/right.png') center center no-repeat;
            background-size: cover;
            text-align: center;
            font-weight: bolder;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: -1rem;
            transition: .4s all;

            &:hover {
              background-position: top left;
            }

            @media screen and (max-width: 1024px) {
              width: 40vw;
              height: 24rem;
              background-size: cover;
              // margin-left: -165vw;
              // margin-left: -30rem;
              transform: translateX(-43vw) translateY(1.1vh);
            }

            span {
              display: block;
              transform: translateY(11rem);
            }
          }
        }

        .content-footer {
          margin: 5rem 5rem;
          text-align: center;
          letter-spacing: 1px;
          line-height: 1.1rem;

          @media screen and (max-width: 1024px) {
            text-align: center;
            margin: 4rem 0 4rem 0;
            font-weight: 600;
          }
        }

      }

      .homeapp-footer {
        width: 110vw;

        .footer-title {
          text-align: center;
          font-weight: bold;
          font-size: 1.4rem;
          color: rgba(117, 172, 96, 0.7);
          margin-bottom: 5rem;
        }

        .footer-content {
          text-align: center;

          span {
            display: inline-block;
            margin: 1rem 1rem;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }

        }

        .footer-bar {
          margin-top: 2rem;
          height: 2.5rem;
          line-height: 2.5rem;
          text-align: center;
          background: rgba(117, 172, 96, 0.7);
        }
      }

      .slider-btn {
        z-index: 555;
      }
    }

    .move {
      transform: translateY(0vh);
    }
  }
</style>