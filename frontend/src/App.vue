<template>
  <div id="app">
      <div class="content">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>

export default {
  name: 'App',

  components: {},


  data: () => ({
    //
  }),
};
</script>
