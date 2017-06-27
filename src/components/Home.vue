<template>

    <div id="home-screen">

      <div class="shoutout-box">
        <div class="shoutout">
          Augmented Reality
        </div>
        <div class="shoutout subshout">
          Delivered
        </div>
      </div>
        
    </div>

</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="sass">
    .shoutout-box
      position: absolute
      top: 30%
      right: 0px
    .shoutout
      background: #14b5eb
      color: #FFF
      padding: 10px 10%
      font-size: 2.5em
      text-transform: uppercase
      text-align: right
    .shoutout.subshout
      background: #000
      margin-top: 10px
      font-size: 3em
    .shoutout-box.left-shout
      left: 0px  
      right: inherit
</style>