<template>
  <b-container id="marker-window" class="scroll-fix text-left">
    <b-row class="pb-0">
      <b-col cols="auto" class="pl-0 pr-2">
        <!-- <b-img thumbnail src="../assets/tyler-rutherford-1130939-unsplash.jpg" class="p-0" /> -->
        <b-img rounded="0" v-bind="imageProps" thumbnail src="../assets/tyler-rutherford-1130939-unsplash.jpg" class="p-0 image-preview" />
      </b-col>
      <b-col class="pr-0 pl-2">
        <p>${{price}}/hour </p>
        <p>12345 - 100th King Boulevard. Coquitlam, BC.</p>

      </b-col>
    </b-row>
    <b-row>
      <b-col class="px-0">
        <b-button block variant="primary">BOOK THIS SPOT</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name:'MarkerWindow',
  data(){
    return{
      imageProps: { width: 200, height: 200 }
    }
  },
  props: {
    price: Number
  }
}
</script>

<style scoped>
  .scroll-fix {
      /* line-height: 1.35; */
      overflow: hidden;
      /* white-space: nowrap; */
  }

  .image-preview {
    border: none;
  }

  button {
    background-color: #00E5FF;
    border:none;
    border-radius: 0;
  }

  button:hover {
    background-color: #3F5D7E;
  }
</style>
