<template>
  <v-app>
    <Navbar/>
    <v-main>
      <span>Pizza Time!</span>

    </v-main>
    <AdFooter/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import AdFooter from "@/components/AdFooter";

export default {
  name: 'ScoringPage',

  components: {
    Navbar,
    AdFooter,
  },


  data: () => ({
    //
  }),
};
</script>
