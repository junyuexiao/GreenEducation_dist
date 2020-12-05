<template>
  <div id="userhomeapp">
    <div class="user-wrap">
      <div class="head-wrap">

        <div class="head">

          <div class="head-img">
            <div class="head-circle"
                 :style="{backgroundImage: 'url(' + circlenow + ')'}">
            </div>
          </div>

          <div class="circle-box"
               :class="{'circle-box-active':circleFlag}">
            <div class="circle-item"
                 v-for="(item,index) in circle"
                 :key="index"
                 :class="{'circle-box-active':circleFlag}"
                 :style="{backgroundImage: 'url(' + item.src + ')'}"
                 @click="changeCircle(item.src,index)">
              <div class="lock"
                   v-if="islock <= index">
                <div class="cover" :class="{'circle-box-active':circleFlag}">
                  <font-awesome-icon
                                     class="icon"
                                     :icon="['fas','lock']" />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="btn"
             @click="toggleCicleBox()">Change headframe</div>
      </div>
      <div class="desc">
        <span>ID: {{ id }} </span>
        <span>Collected: {{ collected }}</span>
        <span>Puzzle to be compressed: {{ PuzzleTBcom }}</span>
        <span>Puzzle to be collected: **</span>
      </div>
    </div>

    <div class="puzzlehome">
      <div class="puzzle_des">
        <div class="title">Puzzles difficulty level</div>
        <div class="btn" @click="toGame()">Get more puzzles</div>
      </div>
      <div class="puzzlehome_img">
        <div class="item">
          <div class="red item-item"
               v-for="(item, index) in list_red"
               :key="index"
               :style="{backgroundImage: 'url(' + item.coverImg + ')'}">
            <div class="red-subitem"
                 :style="{backgroundImage: `url('${item.subImg}')`}"
                 v-if="index < PuzzleTBcom"></div>
          </div>
          <div class="arrow item-item red"></div>
        </div>
        <div class="item">

          <div class="oringe item-item "
               v-for="(item, index) in list_oringe"
               :key="index"
               :style="{backgroundImage: 'url(' + item.coverImg + ')'}">
            <div class="cover">
              <font-awesome-icon
                                 class="icon"
                                 :icon="['fas','lock']" />
            </div>
          </div>

          <div class="arrow item-item oringe"></div>

        </div>
        <div class="item">

          <div class="yellow item-item"
               v-for="(item, index) in list_yellow"
               :key="index"
               :style="{backgroundImage: 'url(' + item.coverImg + ')'}">
            <div class="cover">
              <font-awesome-icon
                                 class="icon"
                                 :icon="['fas','lock']" />
            </div>
          </div>
          <div class="arrow item-item yellow"></div>
        </div>
        <div class="item">

          <div class="green item-item "
               v-for="(item, index) in list_green"
               :key="index"
               :style="{backgroundImage: 'url(' + item.coverImg + ')'}">
            <div class="cover">
              <font-awesome-icon
                                 class="icon"
                                 :icon="['fas','lock']" />
            </div>
          </div>
          <div class="arrow item-item green"></div>
        </div>
      </div>
    </div>

    <div class="logout-btn" @click="logout()">Log out</div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      circleFlag: false, // show the circle box?
      circle: [{
          src: require("./assets/circle1.png"),
        },
        {
          src: require("./assets/circle2.png"),
        },
        {
          src: require("./assets/circle3.png"),
        },

      ],
      circlenow: require("./assets/circle1.png"),
      id: "",
      allPuzzle: 1,
      list_red: [{
          coverImg: require("../Puzzle/assets/red.png"),
          text: "Light bulb off",
          subImg: require('./assets/paper.png')
        },
        {
          coverImg: require("../Puzzle/assets/red.png"),
          text: "Reusable tableware",
          subImg: require('./assets/chazi.png')
        },
        {
          coverImg: require("../Puzzle/assets/red.png"),
          text: "Kraft paper bag",
          subImg: require('./assets/bicyck.png')
        },
      ],
      list_oringe: [{
          coverImg: require("../Puzzle/assets/oringe.png"),
          text: "Light bulb off",
        },
        {
          coverImg: require("../Puzzle/assets/oringe.png"),
          text: "Reusable tableware",
        },
        {
          coverImg: require("../Puzzle/assets/oringe.png"),
          text: "Kraft paper bag",
        },
      ],
      list_yellow: [{
          coverImg: require("../Puzzle/assets/yellow.png"),
          text: "Light bulb off",
        },
        {
          coverImg: require("../Puzzle/assets/yellow.png"),
          text: "Reusable tableware",
        },
        {
          coverImg: require("../Puzzle/assets/yellow.png"),
          text: "Kraft paper bag",
        },
      ],
      list_green: [{
          coverImg: require("../Puzzle/assets/green.png"),
          text: "Light bulb off",
        },
        {
          coverImg: require("../Puzzle/assets/green.png"),
          text: "Reusable tableware",
        },
        {
          coverImg: require("../Puzzle/assets/green.png"),
          text: "Kraft paper bag",
        },
      ],
      collected: '', // how many of puzzle
      PuzzleTBcom: '', // 你解锁了多少个物件
      PUZZleTBcl: '',
      islock: ''
    }),
    async created() {
      this.id = this.$route.query.id;
      this.collected = Number(localStorage.getItem("puzzles"))
      this.PuzzleTBcom = parseInt(Number(localStorage.getItem("puzzles") / 6))
      this.islock = Number(localStorage.getItem("Checkpoint"));
      if (this.islock == 0) {
        this.islock = 1
      }
    },
    methods: {
      toggleCicleBox() {
        this.circleFlag = !this.circleFlag
      },
      changeCircle(src, index) {
        if (this.islock > index) { this.circlenow = src } else {
          alert('locked!')
        }

      },
      toGame() {
        this.$router.push('/index/game')
      },
      logout() {
        localStorage.clear()
        this.$router.push('/index/login')
      }
    }
  };
</script>

<style lang="less">
  #userhomeapp {
    background: url("./assets/bg.jpg");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    min-height: 100vh;
    margin-top: -4vh;
    padding-top: 4vh;

    @media screen and (min-width: 1024px) {
      padding-top: 10vh;
    }

    .user-wrap {
      background: #ffaaaab3;
      height: 20vh;
      margin: 0 3vw;
      border-radius: 14px;
      display: flex;
      // padding: 4vh 3vw;

      @media screen and (min-width: 1024px) {
        min-height: 30vh;
      }

      .head-wrap {
        margin-right: 10px;
        flex: 1;
        padding: 0vh 10vw;
        padding-top: 40px;

        @media screen and(max-width:1024px) {
          // margin: 0; 
          padding-top: 10px;
        }

        .head {
          flex: 1;
          display: block;
          width: 150px;
          height: 150px;

          @media screen and(max-width:1024px) {
            width: 75px;
            height: 75px;
          }

          .head-img {
            background: url('./assets/头.png') 50% 50% no-repeat;
            background-size: contain;
            width: 80%;
            height: 80%;

            @media screen and(max-width:1024px) {
              transform: translate(1vw, 0vh);
              width: 100%;
              height: 100%;

            }

            .head-circle {
              width: 150%;
              height: 190%;
              // background: url('./assets/circle1.png') 100% 100% no-repeat;
              background-position: 100% 100%;
              background-repeat: no-repeat;
              background-size: cover;
              transform: translate(-1vw, -10vh);

              @media screen and(max-width:1024px) {
                transform: translate(-1vw, -4vh);
              }
            }
          }

          .circle-box {
            height: 20vh;
            width: 20vw;
            margin-left: -5vw;
            margin-top: 8vh;
            background: #ffaaaab3;
            height: 0;
            transition: .4s all;
            border-bottom-left-radius: 14px;
            border-bottom-right-radius: 14px;
            display: flex;

            @media screen and(max-width:1024px) {
              width: 90vw;
              margin-left: -8vw;
              margin-top: 9vh;
            }

            // visibility: hidden;

            .circle-item {
              width: 8vw;
              background-size: contain;
              background-repeat: no-repeat;
              transition: .4s all;
              height: 0;
              cursor: pointer;
              position: relative;

              @media screen and(max-width:1024px) {
                width: 30vw;

              }

              .cover {
                color: rgba(0, 0, 0, .4);
                font-size: 2rem;
                margin-left: 2.5vw;
                margin-top: 2vw;
                height: 0;
                transition: .4s all;
                // visibility: hidden;
                overflow: hidden;
                max-height: 0;

                @media screen and(max-width:1024px) {
                  margin-top: 4.5vh;
                  margin-left: 12vw;
                }
              }

              .circle-box-active {
                height: 8vh;
                max-height: 8vh;
                // visibility: visible;
              }

            }

            .circle-box-active {
              height: 15vh;
            }
          }

          .circle-box-active {
            height: 15vh;
          }
        }

        .btn {
          background: rgba(104, 185, 199, 0.8);
          color: #fff;
          margin-top: -10px;
          margin-left: -15px;
          font-weight: lighter;
          font-size: .5rem;
          border-radius: 14px;
          height: 4vh;
          width: 10vw;
          text-align: center;
          line-height: 4vh;
          cursor: pointer;
          display: block;
          transition: .4s all;

          @media screen and(max-width:1024px) {
            width: 30vw;
            margin-left: -20px;
            margin-top: 20px;
          }

          &:hover {
            background: #fff;
            color: rgba(104, 185, 199, 0.8);
          }
        }
      }

      .desc {
        flex: 1;
        margin-top: 3vh;

        @media screen and(max-width:1024px) {
          margin-top: 1vh;
        }

        span {
          display: block;
          color: #fff;
          font-weight: lighter;
          margin-top: 1vh;

          @media screen and (min-width: 1024px) {
            font-weight: bolder;
            margin-top: 2vh;
          }
        }
      }
    }

    .puzzlehome {
      margin-top: 10vh;
      display: flex;

      @media screen and(max-width:1024px) {
        flex-direction: column;
      }

      .puzzle_des {
        width: 40vw;
        height: 60vh;
        background: url('./assets/标-01.png') 50% 50% no-repeat;
        background-size: contain;
        margin-top: 30vh;
        margin-right: 14vw;

        @media screen and(max-width:1024px) {
          margin-top: 0;
          width: 100vw;
        }

        .title {
          color: #fff;
          transform: translateY(10vh) translateX(12vw);
          font-weight: bold;

          @media screen and(max-width:1024px) {
            // text-align: center;
          }
        }

        .btn {
          height: 5vh;
          color: #fff;
          border: 1px solid #fff;
          width: 10vw;
          text-align: center;
          line-height: 5vh;
          transform: translateY(46vh) translateX(19vw);
          background: rgba(104, 185, 199, 0.8);
          transition: .4s all;
          cursor: pointer;
          font-size: .5rem;

          @media screen and(max-width:1024px) {
            width: 60vw;
            transform: translateY(44vh) translateX(19vw);
          }

          &:hover {
            color: rgba(104, 185, 199, 0.8);
            background: #fff;
          }
        }
      }

      .puzzlehome_img {
        width: 40vw;
        height: 100vh;
        background: url('./assets/房子-01.png') 50% 50% no-repeat;
        background-size: cover;

        // display: flex;
        @media screen and(max-width:1024px) {
          width: 90vw;
          margin-left: 5vw;
          // transform: translateY(44vh) translateX(19vw);
        }

        .item {
          display: flex;
          position: relative;
        }




        .item-item {
          width: 7vw;
          height: 14vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          @media screen and(max-width:1024px) {
            width: 25vw;
            height: 13vh;
            // margin-top: 2vh;
          }

          margin-right: 1vw;
          cursor: pointer;
          transition: .4s all;
          position: relative;

          .cover {
            position: absolute;
            width: 100%;
            height: 100%;
            text-align: center;
            background: rgba(0, 0, 0, .4);
            color: #fff;
            font-size: 33px;
            line-height: 14vh;
          }

          &:hover {
            box-shadow: 0 0 13px #999;
          }
        }

        .red {
          transform: translateX(5vw) translateY(26.5vh);

          .red-subitem {
            background-position: center center;
            background-size: contain;
            height: 100%;
            background-repeat: no-repeat;
          }

          @media screen and(max-width:1024px) {
            transform: translateX(2vw) translateY(28.5vh);
          }
        }

        .oringe {
          transform: translateX(5vw) translateY(30.5vh);

          @media screen and(max-width:1024px) {
            transform: translateX(2vw) translateY(31.5vh);
          }
        }

        .yellow {
          transform: translateX(5vw) translateY(34.5vh);

          @media screen and(max-width:1024px) {
            transform: translateX(2vw) translateY(35.5vh);
          }
        }


        .green {
          transform: translateX(5vw) translateY(39.5vh);

          @media screen and(max-width:1024px) {
            transform: translateX(2vw) translateY(40.5vh);
          }
        }

        .arrow {
          background: url('./assets/箭头.png');
          width: 4vw;
          height: 10vh;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;

          margin-right: 1vw;
          cursor: pointer;
          transition: .4s all;
          margin-left: 1vw;
          margin-top: 1vh;
          border-radius: 50%;

          @media screen and(max-width:1024px) {
            width: 10vw;
            height: 6vh;
            margin-top: 4vh;
            // transform: translateX(-1vw);
            margin-left: -.6vw;
          }

          &:hover {
            box-shadow: 0 0 13px #999;
          }
        }
      }
    }

    .logout-btn {
      width: 10vw;
      background: rgba(230, 87, 111, 0.8);
      color: #fff;
      height: 6vh;
      display: block;
      line-height: 6vh;
      text-align: center;
      border-radius: 12px;
      cursor: pointer;
      transition: .5s all;
      // margin-top: -10vh;
      margin: 10vh auto;
      transform: translateY(-10vh);

      @media screen and (max-width:1024px) {
        width: 90vw;

      }

      &:hover {
        color: rgba(230, 87, 111, 0.8);
        background: #fff;

      }
    }
  }
</style>