<template>
  <div id="puzzleapp">

    <div class="inroduction">
      <div class="title">
        Puzzle <br>
        Inroduction
      </div>
      <div class="content">
        <p>You can get puzzle pieces by joining the save koala game. Register to enter the personal page to view the puzzles you have ob-
          tained, the puzzles you haven't obtained, and the puzzles that have been composed. You can combine the obtained puzzle pieces
          into energy-saving items on your personal page. See how energy-saving items can help uS improve climate change.
        </p>
        <p>The puzzle is divided into four levels: one star red puzzle, two star orange puzzle, three-star yellow puzzle and four-star green
          puzzle. In the game of saving koala, 1-2 levels get red puzzles, 3-4 levels get orange puzzles, 5-6 levels get yellow puzzles, 6-8
          levels get green puzzles. With the update of knowledge, the website will provide more levels and puzzles in the future.
        </p>
      </div>
    </div>


    <div class="puzzle-wrap">
      <slider class="puzzle-wrap-swiper"
              height="340vh"
              :indicators="false"
              :autoplay="false">
        <slider-item class="swiper-item">
          <div class="title">
            <div class="title_real">RED PUZZLES <span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span></div>
            <div class="title_sub">— — One star puzzles — —</div>
          </div>
          <div class="item-wrap">
            <div class="item"
                 v-for="(item,index) in list_red"
                 :key="index"
                 :style="{backgroundImage: 'url(' + item.coverImg + ')'}">
              <div class="item-bg"
                   :style="{backgroundImage: 'url(' + item.subImg + ')'}"></div>
              <div class="text">
                <div class="item-title">red puzzle</div>
                {{item.text }}
                <div class="btn" @click="toItem(item.text)">more ></div>
              </div>

            </div>

          </div>
        </slider-item>
        <slider-item class="swiper-item">
          <div class="title">
            <div class="title_real">oringe PUZZLES
              <span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span>
              <span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span>
            </div>
            <div class="title_sub">— — Two star puzzles — —</div>
          </div>
          <div class="item-wrap">
            <div class="item"
                 v-for="(item,index) in list_oringe"
                 :key="index"
                 :style="{backgroundImage: 'url(' + item.coverImg + ')'}">
              <div class="lock">
                <font-awesome-icon
                                   class="icon"
                                   :icon="['fas','lock']" />
              </div>
              <div class="text">
                <div class="item-title">oringe puzzle</div>
                {{item.text }}
                <div class="btn">more ></div>
              </div>

            </div>

          </div>
        </slider-item>
        <slider-item class="swiper-item">
          <div class="title">
            <div class="title_real">yellow PUZZLES
              <span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span>
              <span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span>
              <span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span>
            </div>
            <div class="title_sub">— — Three star puzzles — —</div>
          </div>
          <div class="item-wrap">
            <div class="item"
                 v-for="(item,index) in list_yellow"
                 :key="index"
                 :style="{backgroundImage: 'url(' + item.coverImg + ')'}">
              <div class="lock">
                <font-awesome-icon
                                   class="icon"
                                   :icon="['fas','lock']" />
              </div>
              <div class="text">
                <div class="item-title">yellow puzzle</div>
                {{item.text }}
                <div class="btn">more ></div>
              </div>

            </div>

          </div>
        </slider-item>
        <slider-item class="swiper-item">
          <div class="title">
            <div class="title_real">green PUZZLES <span class="star_icon">
                <span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span>
                <span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span><span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span>
                <span class="star_icon"><img class="star-img" src="./assets/star.png" alt=""></span></span></div>
            <div class="title_sub">— — Four star puzzles — —</div>
          </div>
          <div class="item-wrap">
            <div class="item"
                 v-for="(item,index) in list_green"
                 :key="index"
                 :style="{backgroundImage: 'url(' + item.coverImg + ')'}">
              <div class="lock">
                <font-awesome-icon
                                   class="icon"
                                   :icon="['fas','lock']" />
              </div>
              <div class="text">
                <div class="item-title">green puzzle</div>
                {{item.text }}
                <div class="btn">more ></div>
              </div>

            </div>

          </div>
        </slider-item>
      </slider>
    </div>

  </div>


</template>

<script>
  import Vue from 'vue'
  import { Slider, SliderItem } from 'vue-easy-slider'
  export default {

    name: 'Puzzle',
    components: {
      Slider,
      SliderItem,
    },
    data: () => ({
      list_red: [{
          coverImg: require('./assets/red.png'),
          text: 'Scratch Paper ',
          subImg: require('./assets/ScratchPaper.png')
        },
        {
          coverImg: require('./assets/red.png'),
          text: 'Non-disposable tableware',
          subImg: require('./assets/tableware.png')
        },
        {
          coverImg: require('./assets/red.png'),
          text: 'Bicycle',
          subImg: require('./assets/Bicyle.png')
        },
        {
          coverImg: require('./assets/red.png'),
          text: 'Reusable bag',
          subImg: require('./assets/Reusablebag.png')
        },
        {
          coverImg: require('./assets/red.png'),
          text: 'Turn offed light bulb',
          subImg: require('./assets/bulb.png')
        },
        {
          coverImg: require('./assets/red.png'),
          text: 'Turn offed tap',
          subImg: require('./assets/tap.png')
        },
        { coverImg: require('./assets/red.png') },
        { coverImg: require('./assets/red.png') },

      ],
      list_oringe: [{
          coverImg: require('./assets/oringe.png'),
          text: 'Light bulb off'
        },
        {
          coverImg: require('./assets/oringe.png'),
          text: 'Reusable tableware'
        },
        {
          coverImg: require('./assets/oringe.png'),
          text: 'Kraft paper bag'
        },
        { coverImg: require('./assets/oringe.png') },
        { coverImg: require('./assets/oringe.png') },
        { coverImg: require('./assets/oringe.png') },
        { coverImg: require('./assets/oringe.png') },
        { coverImg: require('./assets/oringe.png') },

      ],
      list_yellow: [{
          coverImg: require('./assets/yellow.png'),
          text: 'Light bulb off'
        },
        {
          coverImg: require('./assets/yellow.png'),
          text: 'Reusable tableware'
        },
        {
          coverImg: require('./assets/yellow.png'),
          text: 'Kraft paper bag'
        },
        { coverImg: require('./assets/yellow.png') },
        { coverImg: require('./assets/yellow.png') },
        { coverImg: require('./assets/yellow.png') },
        { coverImg: require('./assets/yellow.png') },
        { coverImg: require('./assets/yellow.png') },

      ],
      list_green: [{
          coverImg: require('./assets/green.png'),
          text: 'Light bulb off'
        },
        {
          coverImg: require('./assets/green.png'),
          text: 'Reusable tableware'
        },
        {
          coverImg: require('./assets/green.png'),
          text: 'Kraft paper bag'
        },
        { coverImg: require('./assets/green.png') },
        { coverImg: require('./assets/green.png') },
        { coverImg: require('./assets/green.png') },
        { coverImg: require('./assets/green.png') },
        { coverImg: require('./assets/green.png') },

      ],
    }),
    methods: {
      toItem(item) {
        if (item != undefined) {
          this.$router.push(`/index/puzzleintro?id=${item}`)
        } else {
          alert('NOT SUPPORT!')
        }

      }
    }
  }
</script>

<style lang="less">
  #puzzleapp {
    width: 100vw;
    height: 170vh;
    margin-top: -3vh;
    background: url('./assets/bg.jpg');
    padding-top: 8vh;
    overflow: hidden;

    @media screen and (max-width: 1024px) {

      padding-top: 2vh;
      height: auto;
    }

    .inroduction {
      height: 50vh;
      margin: 0 10vw;

      @media screen and (max-width: 1024px) {
        display: block;
        height: auto;
        padding-bottom: 14vh;
      }

      @media screen and (max-width: 1024px) {

        margin: 0 2vw;
      }

      .title {
        font-size: 2rem;
        font-weight: bolder;
        color: #fff;
        display: block;
        margin: 8vh 1vw 8vh 10vw;
      }

      .content {
        line-height: 20px;

        p {
          margin: 4vh 0vw 0 17vw;
          color: rgba(29, 85, 52, 0.7);

          @media screen and (max-width: 1024px) {

            margin: 0;
          }
        }
      }
    }

    .puzzle-wrap-swiper {

      background-color: rgba(55, 108, 117, 1);

      @media screen and (max-width: 1024px) {
        height: 270vh;
      }

      // padding: 0 10vw;

      .swiper-item {
        .title {
          text-align: center;
          margin: 10vh 0 2vh 0;

          .title_real {
            color: #fff;
            margin-bottom: 2vh;
            font-size: 1.4rem;

            .star-img {
              width: 1rem;
              height: 1rem;
            }
          }

          .title_sub {
            color: #ccc;
            font-weight: bolder;
            font-size: 1rem;
          }
        }

        .item-wrap {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 0 18vw;

          .item {
            display: block;
            width: 15vw;
            height: 32vh;
            background-size: contain;
            margin: 2vh .3vw;
            background-repeat: no-repeat;
            background-position: 100% -10%;
            position: relative;
            border: 1px solid #fff;
            position: relative;

            @media screen and (max-width: 1024px) {

              width: 60vw;
            }

            .item-bg {
              position: absolute;
              left: 10%;
              top: -10%;
              transform: translateX(-50%, -50%);
              width: 80%;
              height: 80%;
              // background: url('./assets/light.png') 50% 50% no-repeat;
              background-position: 50% 50%;
              background-repeat: no-repeat;
              background-size: contain;
              z-index: 777;
            }

            .text {
              padding-top: 0.1rem;
              display: block;
              background: rgba(55, 108, 117, 1);
              text-align: center;
              height: 12vh;
              justify-content: center;
              line-height: 3vh;
              bottom: 0;
              position: absolute;
              left: 0;
              width: 100%;
              cursor: pointer;
              transition: all .7s linear;
              color: #fff;
              font-size: 12px;

              .item-title {
                font-weight: bold;
              }

              .btn {
                border: 1px solid #fff;
                width: 50%;
                // text-align: center;
                margin: 0 auto;
                height: 2rem;
                line-height: 2rem;
              }

              &:hover {
                background: #fff;
                color: rgba(55, 108, 117, 1);
              }

              .btn:hover {
                border: 1px solid rgba(55, 108, 117, 1);
                color: #fff;
                background: rgba(55, 108, 117, 1);
              }
            }

            .lock {
              width: 100%;
              height: 32vh;
              background: rgba(0, 0, 0, .7);
              color: #fff;
              position: absolute;
              z-index: 777;
              display: block;
              text-align: center;
              line-height: 34vh;
              cursor: pointer;

              .icon {
                font-size: 6rem;
              }
            }
          }
        }
      }
    }

    .slider-icon[data-v-f56384ae] {
      top: 50vh;
      position: absolute;
    }
  }
</style>