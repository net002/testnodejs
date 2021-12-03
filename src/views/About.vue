<template>
  <div class="about">
    <v-btn @click="test()">test</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    testroute : '55'
  }),
  methods: {
    test() {
      
      this.testroute = this.$route.params.id
      if(this.$route.params.id === 'test')
        console.log(this.testroute)
    },

    
  },
};
</script> 
