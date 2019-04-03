<template>
  <div class="carouselHome">
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="white"
      :interval="3500"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide  img-blank >
        <h1 class="textTitle">Avenyda.</h1>
        <h1 class="textTitle">Anytime.</h1>
        <h1 class="textTitle">Anywhere.</h1>
        <button class="carButton">Get Started</button>
      </b-carousel-slide>

      <b-carousel-slide  img-blank >
       <h1 class="textTitle">Avenyda.</h1>
        <h1 class="textTitle">Anytime.</h1>
        <h1 class="textTitle">Anywhere.</h1>
        <button class="carButton">Get Started</button>
      </b-carousel-slide>
      
        <b-carousel-slide  img-blank >
        <h1 class="textTitle">Avenyda.</h1>
        <h1 class="textTitle">Anytime.</h1>
        <h1 class="textTitle">Anywhere.</h1>
        <button class="carButton">Get Started</button>
      </b-carousel-slide>
    
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.carouselHome{
  width: 50%;
  float: left;
  height: 500px;
  object-fit: cover;
}
.carButton{
  background:  #00E5FF;
  color: white;
  border: none;
  margin: 3px;
  width: 264px;
  height: 47px;
  text-align: center;
  font-size:25px;
  margin-top: 5rem;
}
.textTitle{
  font-size: 60px;
  color: #454F63;
}

.img-fluid{
  height: 500px !important;
}

@media (max-width: 600px) {
.carouselHome{
  width: 100vw;
}
}

</style>
