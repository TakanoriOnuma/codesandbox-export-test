<template>
  <v-app id="app">
    <v-app-bar fixed height="8px">
      <template v-slot:extension>
        <v-tabs>
          <v-tab to="/">Table</v-tab>
          <v-tab to="/input-form">Input Form</v-tab>
          <v-tab to="/button">Button</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <router-view class="router-view" />
  </v-app>
</template>

<style lang="scss" scoped>
.router-view {
  padding-top: 56px;
}
</style>
