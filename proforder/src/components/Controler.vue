<template>
  <div class="index-header_container">

    <div class="index-header_nav">

      <span class="index-header-logo_img"></span>

      <span class="index-header-logo_text">GRENN EDUCTION</span>

      <ul class="index-header_control">
        <li v-for="(item,index) in tabbars"
            :key="index"
            @click="tab(index,item.path)">
          <font-awesome-icon
                             class="index-control_container_aside_li_icon"
                             :icon="item.icon" />
          {{item.name}}
        </li>
      </ul>

      <div class="index-header_icon">
        <span>
          <font-awesome-icon
                             class="index-control_container_aside_li_icon"
                             :icon="['fas','search']" />
        </span>
        <span @click="$router.push('/index/login')">
          <font-awesome-icon
                             class="index-control_container_aside_li_icon"
                             :icon="['fas','user']" />
        </span>
      </div>



    </div>
    <div class="index-header_menu">
      <button class="index-header_btn" :class="{'open':isToggle}" @click="toggle()">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <transition name="fade">
      <div class="index-header_menuList"
           v-show="isToggle"
           transiton="fade">
        <div class="index-header_subtitle">
          Grenn Education
        </div>
        <ul>
          <li v-for="(item,index) in tabbars"
              :key="index"
              @click="tab(index,item.path)">

            <font-awesome-icon
                               class="index-header_mobile-icon"
                               :icon="item.icon" />
            {{item.name}}
          </li>
          <li @click="toUser">
            <font-awesome-icon
                               class="index-header_mobile-icon"
                               :icon="['fas','user']" />
            Account
          </li>
          <!--  @click="toSearch" -->
          <li>
            <font-awesome-icon
                               class="index-header_mobile-icon"
                               :icon="['fas','search']" />
            Search
          </li>
        </ul>
      </div>
    </transition>

    <div class="main">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'Controler',
    data() {
      return {
        tabbars: [{
            name: 'Home',
            path: '/index/home',
            icon: ['fas', 'home']
          },
          {
            name: 'Game',
            path: '/index/game',
            icon: ['fas', 'gamepad']
          },
          {
            name: 'Puzzle',
            path: '/index/puzzle',
            icon: ['fas', 'puzzle-piece']
          },
          {
            name: 'About us',
            path: '/index/aboutus',
            icon: ['fas', 'info-circle']
          }
        ],
        isToggle: false
      }
    },
    methods: {
      toggle() {
        this.isToggle = !this.isToggle
      },
      tab(index, val) {
        this.current = index
        if (val != this.$route.path) {
          this.$router.push(val)
          this.toggle()
        }
      },
      toUser() {
        // const val = '/index/login'
        let val;
        // console.log(Vue.prototype.isLogin)
        if (Vue.prototype.isLogin) {
          val = '/index/userhome'
        } else {
          val = '/index/login'
        }

        if (val != this.$route.path) {
          this.$router.push(val)
          this.toggle()
        }
      },
      toSearch() {
        const val = '/index/search'
        if (val != this.$route.path) {
          this.$router.push(val)
          this.toggle()
        }
      }
    }
  }
</script>

<style lang="less">
  @import url('./Controler.less');
</style>