<template>
  <div id="Puzzlesapp">
    <!-- <v-stepper>
      <v-stepper-header>
        <v-stepper-step v-for="(item,index) in question"
                        :key="index"
                        :step="index + 1"
                        :complete="index == itemNum-1">
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper> -->




    <div class="num" :class="{'wronganswer': wrongAnswer}">{{itemNum + 1}}<span>/</span>{{ question.length}}</div>
    <div class="content">
      <div class="title">{{ questionTitle }}</div>

      <div class="router-l" v-if="leave">
        <div class="t1">
          <p>progress for every question can not be saved, the system</p>
          <p>can only auto-save your progress for every chapter</p>
        </div>

        <div class="t2">
          <p>Please continue to answering question in this chapter or </p>
          <p>you will lose your progress</p>
        </div>

        <div class="btn-group">
          <div class="back btn" @click="routercancel()">Back &lt;</div>
          <div class="confirm btn" @click="go()">confirm -></div>
        </div>
      </div>


      <div class="getin" @click="togglePuzzle()" v-if="isPuzzle">
        <div class="puzzles puzzle1"
             :class="{'puzzleactive': puzzlecilick}"></div>
        <div class="puzzles puzzle2"
             :class="{'puzzleactive': puzzlecilick}"></div>
        <div class="puzzles puzzle3"
             :class="{'puzzleactive': puzzlecilick}"></div>
        <div class="bag"></div>
      </div>

      <div class="question_list" v-if="!leave">

        <mt-checklist
                      align="right"
                      v-model="value"
                      :options=options
                      v-if="quesionStatus"
                      class="quesionCheck">
        </mt-checklist>



        <div class="resultlist"
             v-if="isResult">
          <div class="item"
               v-for="(item,index) in options"
               :key="index"
               @click="toWhy(index)">
            <span class="content">{{ item.label }}</span>
            <span class="bg"
                  :class="{'right': item.correct}">!</span>
          </div>
        </div>


        <div class="resu success" v-show="whyflag">
          <div class="container">
            <div class="content">{{why}}</div>
            <div class="btn-group">
              <div class="more"
                   @click="toMore">Read more</div>
              <div class="next"
                   @click="toNext">Confirm</div>
            </div>
          </div>
        </div>

        <div class="resu success" v-show="success">
          <div class="container">
            <div class="content">
              <div class="title">
                Congratulations you choosse the right answer
              </div>
              <div class="msg">
                you could learn more information on tips or collect the puzzle now
              </div>
            </div>
            <div class="btn-group">
              <div @click="toResult">Read More</div>
              <div @click="nextQ">Confirm <span>→</span></div>
            </div>
          </div>

        </div>

        <div class="resu wrong" v-show="wrongflag">
          <div class="container">
            <div class="content">
              <div class="title">
                Sorry you choose the wrong answer
              </div>
              <div class="msg">
                you could know more information on tips of why your answer are wrong ot try it again by yourslef
              </div>
            </div>
            <div class="btn-group">
              <div @click="toResult">Find out why</div>
              <div @click="wrongConfirm">Try again <span>→</span></div>
            </div>
          </div>
        </div>

        <v-btn
               type="primary"
               :loading="loading"
               @click="nextItem"
               class="btn"
               :disabled="value == ''"
               v-if="quesionStatus">
          <span v-if="!loading">Confirm</span>
          <span v-else>Loading...</span>
        </v-btn>


        <v-btn
               type="primary"
               :loading="loading"
               @click="resultNextItem"
               class="btn"
               v-if="whyBtn">
          <span v-if="!loading">Confirm</span>
          <span v-else>Loading...</span>

        </v-btn>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    beforeRouteLeave(to, from, next) {
      this.toPath = to.path
      if ((this.itemNum === this.question.length - 1)) {
        next()
      }
      if (this.sureleave) {
        next()
      }
      this.leave = !this.leave
    },
    name: 'Puzzles',
    data: () => ({
      id: '', // page id
      question: {}, // questions object
      itemNum: 0, // itme number
      subData: [], // Data for each question
      questionId: '', // quesion ID
      questionTitle: '', // question title
      options: [], // the answer of question
      multi: false, // multi?
      value: [], // Value carried by option
      btn: 'confirm', // the texxt of button
      right: '', // the right option
      loading: false, // loading animation
      quesionStatus: true, // quesion list
      success: false, // choose the right answer
      msg: [], // the answer messgae
      _id: [],
      wrongAnswer: false, // the color of stpes
      isResult: false, // the reult box
      localSnum: 0, // read the localstorage
      whyflag: false, // show me why?
      why: '', // tell me why
      $a: '', // further
      wrongflag: false, // choose wrong answer?
      whyBtn: false,
      leave: false,
      sureLeave: false,
      toPath: '',
      puzzlecilick: false,
      isPuzzle: false
    }),
    async created() {
      /** Got the page id to request the question lists */
      this.id = this.$route.query.id
      this.localSnum = Number(localStorage.getItem('Checkpoint'))
      if (this.localSnum == 0) {
        this.localSnum = 1
      }
      this.Userpuzzles = Number(localStorage.getItem('puzzles'))
      // console.log(this.localSnum, this.id)
      this.$http.get(this.localConfig.question).then(res => {
        /** Get different questions according to different ID values */
        switch (this.id) {
        case '01':
          this.question = res.data.results.list01
          this._setData();
          break
        case '02':
          this.question = res.data.results.list02
          this._setData();
          break
        case '03':
          this.question = res.data.results.list03
          this._setData();
          break
        }

      })


    },
    methods: {
      /** Take out the key value pairs in the object */
      _setData() {
        this.subData = this.question[this.itemNum];
        this.questionId = this.subData.id;
        this.questionTitle = this.subData.title;
        this.options = this.subData.answer;
        this.right = this.subData.right
      },
      nextItem() {
        /** loading animation */
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 500);

        setTimeout(() => {
          /** Try to run the following code and catch the error */
          try {
            /** Confirm user selected option */
            if (this.value) {
              /** Check if it contains the correct answer */
              // this.right.indexOf(this.right.indexOf(this.value) != -1
              if (this.value.sort().toString() == this.right.sort().toString()) {
                this.wrongAnswer = false
                /** submit */
                if (this.itemNum === this.question.length - 1) {
                  if (Number(this.id) < this.localSnum + 1) {
                    localStorage.setItem("Checkpoint", Number(this.id) + 1);
                    localStorage.setItem("puzzles", Number(this.Userpuzzles + 12))
                  }
                  this.$router.push({
                    path: '/index/game'
                  });
                  /** I will set localstorage of here ... */
                } else {
                  this.success = !this.success
                  this.quesionStatus = false
                }

                if (this.itemNum < this.question.length - 1) {
                  return false;
                } else {
                  this.btn = 'submit';
                }
              } else {
                this.wrongflag = true
                this.quesionStatus = false
              }

            } else {
              alert('请选择选项');
            }
          } catch (e) {
            alert('Maybe something went wrong')
          }
        }, 700)
      },
      nextQ() {
        this.value = []
        this.isPuzzle = true
        this.success = false
        this.itemNum += 1;
        this._setData();
      },
      toWhy(i) {
        this.$a = this.options[i].further
        this.why = this.options[i].msg // content of the answer
        this.whyflag = true // show the answer box
        this.isResult = !this.isResult // close the question list
        // this.whyBtn = !this.whyBtn
        this.whyBtn = false
      },
      toMore() {
        /** 跳转到问题链接 */
        window.open(this.$a, '_blank').location;
      },
      toNext() {
        this.whyflag = false // show the answer box
        this.isResult = !this.isResult // close the question list
        this.whyBtn = true
      },
      resultNextItem() {
        this.isResult = false
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 500);
        setTimeout(() => {
          this.nextQ()
          this.whyBtn = false
        }, 700)
      },
      /** to resut page */
      toResult() {
        this.isResult = true
        this.wrongflag = false
        this.whyBtn = true
        this.success = false
      },
      /** try again */
      wrongConfirm() {
        this.wrongflag = false
        this.quesionStatus = true
        this.whyBtn = true
      },
      go() {
        this.sureleave = true
        this.$router.push(this.toPath)
      },
      routercancel() {
        this.leave = !this.leave
      },
      togglePuzzle() {
        this.puzzlecilick = !this.puzzlecilick

        setTimeout(() => {
          this.isPuzzle = false
          this.quesionStatus = true
        }, 500)
      }
    },
    watch: {
      /** selcet */
      /** 监听用户的选择 */
      value() {
        this._id = []
        if (this.value.indexOf('A') > -1) {
          this._id.push(0)
        }
        if (this.value.indexOf('B') > -1) {
          this._id.push(1)
        }
        if (this.value.indexOf('C') > -1) {
          this._id.push(2)
        }
        if (this.value.indexOf('D') > -1) {
          this._id.push(3)
        }
        if (this.value.indexOf('E') > -1) {
          this._id.push(4)
        }
        if (this.value.indexOf('F') > -1) {
          this._id.push(5)
        }
      }
    }
  }
</script>

<style lang="less">
  #Puzzlesapp {
    margin-top: -4vh;
    width: 100vw;
    min-height: 100vh;
    background: url('./assets/gamebg2.png') center center no-repeat;
    background-size: cover;
    transition: 1s all linear;
    position: relative;

    .theme--light.v-stepper {
      background: none;
    }

    .num {
      display: block;
      text-align: center;
      // margin-top: 12px;
      padding: 2rem;
      color: #fff;
      font-weight: bold;
      font-size: 1.4rem;
      text-shadow: 1px 2px 1px #ccc;
    }

    .wronganswer {
      color: tomato;
    }

    .content {
      display: block;
      padding: 0 6vw;
      cursor: pointer;

      .getin {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);


        .puzzles {
          background: url('./assets/item.png') 50% 50% no-repeat;
          width: 10vw;
          height: 10vh;
          // border: 1px solid red;
          background-size: cover;
          // display: flex;
          display: inline-block;
          // transform: translateY(20vh);

          margin-bottom: -10vh;
          transition: .4s all;
        }

        .puzzleactive {
          margin-bottom: -28vh;
          visibility: hidden;
        }

        .bag {
          background: url('./assets/bag.png') 50% 50% no-repeat;
          width: 20vw;
          height: 40vh;
          // border: 1px solid red;
          background-size: cover;
          // z-index: 999;
        }

        .puzzle1 {
          transform: translate(4vw, 3vh);
        }

        .puzzle2 {
          transform: translate(-3vw, 0);
        }

        .puzzle3 {
          transform: translate(-14vw, 6vh);
        }
      }

      .router-l {
        width: 60vw;
        height: 40vh;
        text-align: center;
        margin: 10vh auto;
        background: #747270;
        padding: 3vh 0;

        @media screen and (max-width:1024px) {
          width: 90vw;
        }

        .t1 {
          color: #fff;
          font-size: 1.5rem;
          line-height: 2rem;
          margin-bottom: 4vh;

          @media screen and (max-width:1024px) {
            font-size: 1rem;
            line-height: 1.4rem;
          }
        }

        .t2 {
          color: #fff;
          font-size: 1.5rem;
          line-height: 2rem;
          margin-bottom: 4vh;

          @media screen and (max-width:1024px) {
            font-size: 1rem;
            line-height: 1.4rem;
          }
        }

        .btn-group {
          display: flex;

          .btn {
            width: 6vw;
            height: 5vh;
            border: 2px solid #fff;
            line-height: 5vh;
            background: rgb(90, 134, 116);
            color: #fff;
            flex: 1;
            margin: 1vh 5vw;
            transition: .4s all;
            cursor: pointer;

            &:hover {
              color: rgb(90, 134, 116);
              background: #fff;
            }
          }
        }
      }

      .title {
        display: block;
        margin-bottom: 4vh;
        font-weight: bold;
        color: #fff;
        text-shadow: 1px 2px 1px #ccc;
        line-height: 4vh;
      }

      .question_list {
        padding-bottom: 18vh;

        @media screen and (min-width: 1024px) {
          display: flex;
        }

        .mint-checkbox-core {
          background: none;
          width: 2rem;
          height: 2rem;
          // float: right;
          position: absolute;
          border: 2px solid #ccc;

          @media screen and (min-width: 1024px) {
            // display: none;
          }
        }

        .mint-checkbox-input:checked+.mint-checkbox-core {
          background: rgba(72, 115, 122, 0.8);
        }

        .theme--light.v-stepper {
          background: none;
        }

        .v-stepper {
          box-shadow: none;
        }

        .mint-checkbox-core::after {
          width: .6rem;
          height: 1rem;
          text-align: center;
          font-weight: bold;
          margin-left: 0.2rem;
        }

        .mint-cell-wrapper {
          background: none;
          display: block;


        }

        .mint-cell {
          display: block;
          padding: 1rem 3rem 1rem 0;
          background: rgba(72, 115, 122, 0.8);
          border: none;
          border-radius: 14px;
          margin-bottom: 10px;
          margin-left: 0;
          color: #fff;
          box-shadow: 4px 4px 12px rgba(83, 100, 102, 0.4);
          transition: all .6s linear;

          &:hover {
            box-shadow: 1px 1px 3px#000;
          }

          @media screen and (min-width: 1024px) {
            flex: 1;
            width: 40vw;
          }
        }

        .btn {
          display: block;
          margin: 4vh auto 0 auto;
          border: 3px solid rgba(72, 115, 122, 0.8);
          background: rgba(83, 100, 102, 0.4);
          color: #fff;
          padding: 1rem 2rem;
          height: 3rem;
          line-height: 3rem;
        }

        .why {
          // padding: 0;

          .container {
            border: 2px solid #fff;
            height: 40vh;
            width: 100%;

            .content {
              color: #fff;
            }

            .btn {
              border: none;
              background: none;
              display: flex;
            }

            .more {
              border: 2px solid #fff;
              height: 5vh;
              line-height: 5vh;
              margin: 0 .4rem;
              // flex: 1;
            }

            .next {
              border: 2px solid #fff;
              height: 5vh;
              line-height: 5vh;
              margin: 0 .4rem;
            }
          }
        }
      }

      .resultlist {
        .item {

          display: block;
          padding: 1rem 3rem 1rem 0;
          background: rgba(72, 115, 122, 0.8);
          border: none;
          border-radius: 14px;
          margin-bottom: 10px;
          margin-left: 0;
          color: #fff;
          box-shadow: 4px 4px 12px rgba(83, 100, 102, 0.4);
          transition: all .6s linear;
          padding-left: 1rem;
          position: relative;

          .bg {
            width: 40px;
            height: 40px;
            display: inline;
            position: absolute;
            right: 1rem;
            top: .3rem;
            background: rgba(80, 14, 20, 1);
            border-radius: 100%;
            text-align: center;
            line-height: 40px;
            font-size: 2rem;
            font-weight: bold;
          }

          .right {
            background: rgba(164, 223, 198, 1);
          }

          @media screen and (min-width: 1024px) {
            flex: 1;
            width: 40vw;
          }

        }
      }
    }

    .resu {
      position: absolute;
      z-index: 444;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90vw;
      background: rgba(124, 154, 158, 0.8);
      height: 35vh;
      padding: 1rem;

      @media screen and (min-width:1024px) {
        height: 50vh;
        width: 70vw;
        padding: 2rem;
      }

      .container {
        border: 2px solid #fff;
        width: 100%;
        height: 100%;

        .content {
          padding: 0;
          color: #fff;
          margin: 1rem;

          .title {
            text-shadow: none;
            margin-bottom: 1rem;

            @media screen and (min-width:1024px) {
              text-align: center;
              margin: 2rem 0;
            }
          }

          .msg {
            color: #fff;
            margin-bottom: 2rem;

            @media screen and (min-width:1024px) {
              text-align: center;
              margin: 2rem 0;
            }
          }
        }

        .btn-group {
          display: flex;

          @media screen and (min-width:1024px) {
            text-align: center;
            margin: 6rem 0;
          }

          div {
            flex: 1;
            border: 2px solid #fff;
            height: 4vh;
            line-height: 4vh;
            color: #fff;
            margin: 0 3vw;
            padding: 0 1vw;
            cursor: pointer;
            transition: .4s all;

            @media screen and (min-width:1024px) {
              text-align: center;
              // margin: 6rem 0;
              height: 7vh;
              line-height: 7vh;

              &:hover {
                background: #fff;
                color: rgba(124, 154, 158, 0.8);
              }
            }

            span {
              margin-left: 4vw;
            }
          }

        }
      }
    }

  }
</style>