<template>
  <div>
    <h1 v-if="text" class="title" v-html="text" />
     <div class="w3-panel w3-leftbar w3-sand">
       <p class="w3-xxlarge w3-serif">
         <i v-if="quotes" v-html="quotes" /></p>
       <p v-if="quotesby"v-html="quotesby" />
      </div> 
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false
    },
    quotes: {
      type: String,
      required: false
    },
    quotesby: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: calc(21px + (48 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 300;
    line-height: 1.25;
    letter-spacing: 0.1rem;
    width: 800px;
    max-width: 100%;
    margin: 18vw auto 7vw auto;
  }

  @media screen and (min-width: 600px) {
    .title {
      margin: 12vw auto 7vw auto;
    }
  }

</style>
