<template>
  <v-app>
    <component
      v-if="pageLayout"
      :is="pageLayout">
      <router-view />
    </component>
    <router-view v-else />
  </v-app>
</template>

<script>

import { mapActions, mapState } from "vuex";
import MainLayout from "./layout/MainLayout.vue";

export default {
  name: 'App',
  components: {
    MainLayout
  },
  computed: {
    ...mapState(['isAuth']),
    pageLayout() {
      return this.isAuth ? 'MainLayout' : ''
    }
  },
  methods: {
    ...mapActions(['click'])
  },
};
</script>
