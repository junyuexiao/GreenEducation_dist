<template>
  <div id="gameapp">
    <div class="main-content">
      <div class="game-content">

        <div class="checkpoint"
             v-for="(item,index) in checkpointlist"
             :key="index"
             @click="toPuzzles(item.id)"
             :class="{'islock': item.id > lockflag}"
             :style="{transform: (item.id <= 3 ? `translateX(${item.id *100}px) translateY(${item.id}px)` : `translateX(${item.id *100}px) translateY(-${item.id*130}px)`)}">
          <span class="point_title" v-if="item.id <= lockflag">{{ item.id }}</span>
          <span class="point_title" v-if="item.id > lockflag">
            <font-awesome-icon
                               class="icon"
                               :icon="['fas','lock']" /></span>
        </div>
      </div>

      <div class="msg-content" v-show="boxflag">
        <div class="msg">
          <div class="title">This level is locked</div>
          <div class="content">Please pass the perivous level to unlock more level</div>
          <div class="btn" @click="msgBox">Confirm <span>→</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Game',
    data: () => ({
      checkpointlist: [{ id: '01' }, { id: '02' }, { id: '03' }, { id: '04' }],
      lockflag: 0,
      boxflag: false,
    }),
    async created() {
      this.lockflag = Number(localStorage.getItem('Checkpoint'))
      if (this.lockflag == 0) {
        this.lockflag = 1
      }
      console.log(this.lockflag)
    },
    methods: {
      toPuzzles(id) {
        if (id <= this.lockflag) {
          this.$router.push(`/index/puzzles?id=${id}`)
        } else {
          this.boxflag = !this.boxflag
        }
      },
      msgBox() {
        this.boxflag = !this.boxflag
      }
    }
  }
</script>

<style lang='less'>
  #gameapp {
    max-height: 100vh;
    padding-top: -2vh;
    width: 100vw;
    overflow: hidden;


    @media screen and (max-width: 1024px) {
      margin-top: -5vh;
    }

    .main-content {
      width: 100vw;
      height: 100vh;
      background: url('./assets/gamebg2.png') 50% 50% no-repeat;
      background-size: cover;
      transition: .4s all;



      @media screen and (max-width: 1024px) {
        overflow: hidden;
      }

      .game-content {
        display: block;
        height: 80vw;
        margin-left: -5vw;
        padding-top: 10vh;

        @media screen and (max-width: 1024px) {
          width: 100%;
          height: 100vh;
          background-position: center center;
          margin-left: 0;
          padding-top: 6vh;
        }

        .checkpoint {
          width: 9vw;
          height: 27vh;
          color: #000;
          margin-left: 5vw;
          text-align: center;
          background: rgba(72, 115, 122, 0.3);
          line-height: 20vh;
          cursor: pointer;
          transition: .4s all;
          background: url('./assets/1-01.png') 50% 50% no-repeat;
          background-size: contain;
          color: #fff;


          @media screen and (min-width: 1024px) {
            &:hover {
              width: 8vw;
              height: 17vh;

              .point_title {
                background: #fff;
                color: rgba(72, 115, 122, 0.7);
                // box-shadow: 1px 1px 15px rgba(120, 194, 175, 0.7)
              }
            }
          }

          @media screen and (max-width: 1024px) {
            background: url('./assets/1-01.png') 50% 50% no-repeat;
            background-size: contain;
            background-color: rgba(83, 100, 102, 0.3);
            color: #fff;
            border: none;
            border-radius: 14px;
            margin-bottom: 10px;
            width: 100vw;
            height: 10vh;
            line-height: 10vh;
            margin-left: 0;
            color: #fff;
            box-shadow: 4px 4px 12px rgba(83, 100, 102, 0.3);
            transform: translate(0) !important;
          }

          .point_title {
            line-height: 10vh;
            text-align: center;

            @media screen and (min-width: 1024px) {
              background: rgba(134, 204, 216, 0.9);
              display: inline-block;
              width: 4rem;
              height: 1.8rem;
              line-height: 1.8rem;
              border-radius: 8px;
              margin-top: 8rem;
              transition: .8s all;
              // transform: translateY(-5rem);

              &:hover {
                background: #000;
                color: #fff;
              }
            }
          }
        }



        .islock {
          color: #ccc;
          background: url('./assets/2-01.png') 50% 50% no-repeat;
          background-size: contain;
          width: 9vw;
          height: 27vh;

          @media screen and (max-width: 1024px) {
            width: 100vw;
            height: 10vh;
            background-color: rgba(83, 100, 102, 0.9);
          }

          &:hover {
            width: 9vw;
            height: 27vh;

            @media screen and (max-width: 1024px) {
              width: 100vw;
              height: 10vh;
              background-color: rgba(83, 100, 102, 0.9);
            }

            .point_title {
              line-height: 10vh;
              text-align: center;

              @media screen and (min-width: 1024px) {
                background: none;
                display: inline-block;
                width: 4rem;
                height: 1.8rem;
                line-height: 1.8rem;
                border-radius: 8px;
                margin-top: 4rem;
                font-size: 5rem;
                transition: .4s all;
                color: #000; // transform: translateY(-5rem);
              }
            }

          }

          .point_title {
            line-height: 10vh;
            text-align: center;

            @media screen and (min-width: 1024px) {
              background: none;
              display: inline-block;
              width: 4rem;
              height: 1.8rem;
              line-height: 1.8rem;
              border-radius: 8px;
              margin-top: 4rem;
              font-size: 5rem;
              color: rgba(12, 21, 22, 0.7);
              // transform: translateY(-5rem);
            }
          }
        }
      }

      .msg-content {
        z-index: 444;
        // border: 1px solid red;
        background: rgba(134, 204, 216, 0.6);
        border-radius: 44px;
        width: 50vw;
        height: 40vh;
        display: block;
        position: absolute !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem;

        @media screen and (max-width:1024px) {
          width: 90vw;
          height: 30vh;
        }

        .msg {
          border: 2px solid #fff;
          height: 100%;
          border-radius: 44px;
          padding: 2rem;

          @media screen and (max-width:1024px) {
            // font-size: 1.4rem;
            padding: 1rem;
          }

          .title {
            color: #fff;
            text-align: center;
            font-weight: bolder;
            font-size: 2rem;
            margin-bottom: 2rem;

            @media screen and (max-width:1024px) {
              font-size: 1.4rem;
              margin-bottom: 1rem;
            }
          }

          .content {
            color: #fff;
            font-size: 1.5rem;
            margin: 0 4rem;
            line-height: 2rem;
            letter-spacing: 2px;

            @media screen and (max-width:1024px) {
              font-size: 1.2rem;
              margin: 1rem 0;
              letter-spacing: .7px;
            }
          }

          .btn {
            color: #fff;
            border: 2px solid #fff;
            width: 10rem;
            padding: .9rem;
            background: rgba(62, 83, 87, 0.3);
            cursor: pointer;
            transition: .4s all;
            margin-left: 30vw;
            margin-top: 5vh;

            @media screen and (max-width:1024px) {
              margin: 0 auto;
            }

            span {
              display: inline-block;
              margin-left: 1rem;
            }

            &:hover {
              color: rgba(62, 83, 87, 0.3);
              background: #fff;
              border: 2px solid rgba(62, 83, 87, 0.3);
            }
          }
        }
      }
    }

  }
</style>