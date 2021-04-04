<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-2"
    >
      <v-sheet
          id="dropzone"
          ref="dzone"
          tabindex="0"
          color="white"
          width="85%"
          height="200"
          class="ma-2"
          elevation="5"
      >
        <input
            ref="upload"
            id="fileUpload"
            type="file"
            accept="text/xml"
            style="display:none"
        />
        <v-row justify="center" align="center" class="mt-10">
          <v-icon
              v-if="!dragover"
              color="secondary darken-2"
              size="75"
          >mdi-cloud-upload-outline
          </v-icon>
          <v-icon
              v-if="dragover"
              color="secondary darken-2"
              size="75"
          >mdi-book-plus
          </v-icon>
        </v-row>
        <v-row justify="center">
          <span class="title">
            Input SBOL File
          </span>
        </v-row>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
</script>


<style scoped>

</style>