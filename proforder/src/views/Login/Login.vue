<template>
  <div id="login">
    <div class="login-form_desc">
      <p class="desc_title">Register or Log in</p>
      <p class="desc_content">Obtain evironmentally friendly item puzzle by saving the koala game</p>
    </div>
    <v-form v-model="valid" class="login-form_container">

      <v-text-field class="login-form_input"
                    v-model="Email"
                    :rules="EmailRules"
                    :counter="10"
                    label="E-mail"
                    required>
      </v-text-field>

      <v-text-field class="login-form_input"
                    v-model="password"
                    :rules="passwordRules"
                    label="password"
                    type="password"
                    required>
      </v-text-field>

      <v-btn
             class="login-form_btn"
             :loading="loading"
             :disabled="loading"
             color="secondary"
             @click="loader = 'loading'">
        LOGIN
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'Login',
    data: () => ({
      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be less than 6 characters',
      ],
      Email: '',
      EmailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      loader: null,
      loading: false,
    }),
    methods: {
      Login() {

      }
    },
    watch: {
      loader() {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => {
          this[l] = false
          this.$router.push({ path: '/index/userhome', query: { id: this.Email, password: this.password } })
          Vue.prototype.isLogin = true
          console.log(Vue.prototype.isLogin)
        }, 3000)

        this.loader = null
      },
    },

  }
</script>

<style lang="less">
  #login {
    background: url('./assets/login_bg.jpg') 100% 100% no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

    @media screen and (max-width:1024px) {
      margin-top: -1.5rem;
      background-position: left center;
    }

    .login-form_container {
      width: 25vw;
      height: 50vh;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      padding: 3rem;
      box-shadow: 22px 22px 40px rgba(0, 0, 0, .3);
      border-radius: 4px;

      @media screen and (max-width: 1024px) {
        width: 90%;
        background: rgba(255, 255, 255, .6);
      }

      .login-form_input {
        margin-bottom: 20px;

      }

      .login-form_btn {
        width: 18vw;
        background: #f53b57;
        font-weight: bold;

        @media screen and (max-width: 1024px) {
          width: 100%;
          height: 3rem;
        }
      }
    }

    .login-form_desc {
      transform: translate(10vw, 25vh);
      width: 25vw;

      @media screen and (max-width: 1024px) {
        width: 100vw;
        transform: translate(0, 0);
      }

      .desc_title {
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 1px;
        margin-bottom: 2.2rem;

        @media screen and (max-width: 1024px) {
          text-align: center;
          margin-top: 3rem;
          color: #f53b57;
        }
      }

      .desc_content {
        color: #fff;
        font-size: 1.4rem;
        line-height: 40px;

        @media screen and (max-width: 1024px) {
          text-align: center;
          margin-top: 3rem;
          // color: #f53b57;
          transform: translateY(50vh);
        }
      }
    }
  }
</style>