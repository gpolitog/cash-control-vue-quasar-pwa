<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="layout" view="lHH Lpr lFF" :left-breakpoint="10000" :reveal="true">
      <!-- Header -->
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Cash Control
          <span slot="subtitle">Controle financeiro simples e rápido</span>
        </q-toolbar-title>
      </q-toolbar>

      <!-- Left Side Panel -->
      <div slot="left">
        <q-list no-border link inset-separator>
          <q-list-header>Essential Links</q-list-header>
          <q-side-link item to="/docs">
            <q-item-side icon="school" />
            <q-item-main label="Docs" sublabel="quasar-framework.org" />
          </q-side-link>
        </q-list>
      </div>

      <!-- sub-routes get injected here: -->
      <router-view />

    </q-layout>
  </div>
</template>

<script>

/*
 * Root component
 */

export default {
  name: 'app',
}
</script>

<style lang="stylus" scoped>

main
  text-align center

h1
  clear left

</style>
