<template>
    
  <div id="how-screen">
    <div class="columns">
      <div class="column ">
        <div class="screen-title-box columns push-left">
          <div class="column is-one-third is-12-mobile">
            How it Works
          </div>
        </div>
        <div class="screen-title-box columns push-left">
          <div class="column is-3 is-6-mobile">
            Simple
          </div>
        </div>
        <div class="download-box columns">
          <div class="steps column is-one-third is-offset-one-third">
            <div class="step-number">1</div>
            <div class="step-text">
              Download our app
            </div>
          </div>
        </div>
        <div class="download-box columns">
          <div class="column">
            <img src="images/apple-badge-web-sized.png" alt=""><br>
            <img src="images/play-badge-web-sized.png" alt="">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="download-box columns inverted">
          <div class="steps inverted column is-half is-offset-one-third">
            <div class="step-number inverted">2</div>
            <div class="step-text">
              Point it at something
            </div>
          </div>
        </div>
        <div class="download-box columns">
          <div class="column">
            <img src="images/phone-mockups.jpg" alt="Phone Mockups">
          </div>
        </div>
      </div>
    </div>
    
  </div>

</template>

<script>
    
</script>

<style lang="sass">
    $seekblue: #14b5eb

    .push-left
      position: relative
      left: -20px
    .screen-title-box .column
      background: $seekblue
      color: #FFF
      font-size: 2.5em
      text-transform: uppercase
      padding: 3px 20px
    .screen-title-box:nth-child(2)
      margin-top: 10px
    .screen-title-box:nth-child(2) .column
      background: #000 
    .download-box
      margin-top: 40px
      text-align: center
      width: 100%
    .steps
      position: relative
      color: #FFF
      padding: 10px 2% 10px 5%
      background: $seekblue
      width: 400px
    .step-number
      position: absolute
      left: 10px
      top: -40px
      font-size: 6em
      color: #000
    .step-text
      font-size: 1.8em
    .step-number.inverted
      color: $seekblue
    .steps.inverted
      background: #000
</style>