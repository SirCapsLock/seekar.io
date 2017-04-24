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
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu">
              <router-link to="/" class="nav-item is-tab" active-class="is-active" exact>Home</router-link>
              <router-link to="/how" class="nav-item is-tab" active-class="is-active">How it Works</router-link>
              <router-link to="/try" class="nav-item is-tab" active-class="is-active">Try it Out</router-link>
              <router-link to="/contact" class="nav-item is-tab" active-class="is-active">Contact</router-link>
            </div>
          </div>
        </header>
      </div>
    </div>

    <div class="hero-body">
      <div class="container">
        <transition name="slide-left" mode="out-in">
          <router-view default="/" transition="slide-left"></router-view>
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
      transitionName: "slide-left"
    }
  }
}
</script>

<style lang="sass">
  .nav-bar 
    background: black
    overflow: hidden
  .footer
    background-color: black
    color: white
</style>
