<template>

  <section class="hero is-default">
    <div class="hero-head nav-bar">
      <div class="container">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="" href="../index.html">
                <img src="./assets/logo.png" alt="Description">
                <br>
              </a>
            </div>
            <span class="nav-toggle" :class="{ 'is-active': mobileNavActive }" @click="mobileNavActive = !mobileNavActive">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu" :class="{ 'is-active': mobileNavActive }">
              <router-link to="/" class="nav-link nav-item is-tab" exact @click.native="hideNav">Home</router-link>
              <router-link to="/how" class="nav-link nav-item is-tab" @click.native="hideNav">How it Works</router-link>
              <router-link to="/try" class="nav-link nav-item is-tab" @click.native="hideNav">Try it Out</router-link>
              <router-link to="/contact" class="nav-link nav-item is-tab" @click.native="hideNav">Contact</router-link>
            </div>
          </div>
        </header>
      </div>
    </div>

    <div class="hero-body">
      <div class="container">
        <transition name="slide-left" mode="out-in">
          <router-view class="view" default="/" transition="slide-left" key="hello"></router-view>
        </transition>
      </div>
    </div>

  </section>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: "slide-left",
      mobileNavActive: false
    }
  },
  methods: {
    hideNav() {
      this.mobileNavActive = false;
    }
  }
}
</script>

<style lang="sass">
  .nav-toggle span
    background-color: #FFF
  .nav-toggle:hover
    background-color: #000
  .nav-item
    background: #000
  .nav-bar 
    background: #000
  .nav-link
    font-size: 1.3em
  .nav-link:not(.is-active)
    color: white !important
</style>
