<template>
  <v-app>
    <Navbar/>
    <v-main>
      <Title/>
      <Dropzone/>
    </v-main>
    <AdFooter/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Dropzone from "@/components/Dropzone";
import AdFooter from "@/components/AdFooter";

export default {
  name: 'App',

  components: {
    Navbar,
    Dropzone,
    AdFooter,
    Title,
  },
  

  data: () => ({
    //
  }),
};
</script>
