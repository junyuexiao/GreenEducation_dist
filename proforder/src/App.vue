<template>
  <div id="app">
    <div v-show="loading" class="mx-auto">
      <v-skeleton-loader type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions">

      </v-skeleton-loader>

    </div>
    <transition :name="direction">
      <router-view class="appView" v-show="show"></router-view>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      loading: true,
      show: false,
      direction: "slide-right"
    }),
    async created() {
      await setTimeout(() => {
        this.loading = !this.loading
        this.show = !this.show
      }, 2000)
    },
    watch: {
      $route(to, from) {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        if (to.path == "/") {
          this.direction = "slide-right";
        } else if (from.path == "/") {
          this.direction = "slide-left";
        } else {
          this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
        }
      }
    }

  }
</script>

<style lang='less'>
  ::-webkit-scrollbar {
    display: none;
  }

  .mx-auto {
    width: 50vw;
    height: 100vh;
    margin: 25vh 25vw;

    @media screen and (max-width: 1024px) {
      width: 100vw;
      margin: 0;
      margin-top: 20vh;
    }

  }

  .appView {
    position: absolute;
    width: 100%;
    transition: transform 1s ease-out;
  }

  .slide-left-enter {
    transform: translate(100%, 0);
  }

  .slide-left-leave-active {
    transform: translate(-50%, 0);
  }

  .slide-right-enter {
    transform: translate(-50%, 0);
  }

  .slide-right-leave-active {
    transform: translate(100%, 0);
  }
</style>