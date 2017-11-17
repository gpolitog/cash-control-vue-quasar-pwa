<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="layout" view="lHH Lpr lFF" left-breakpoint="10000" :reveal="true">
      <!-- Header -->
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Layout Header
          <span slot="subtitle">Optional subtitle</span>
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
          <q-side-link item to="/forum">
            <q-item-side icon="record_voice_over" />
            <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
          </q-side-link>
          <q-side-link item to="/chat">
            <q-item-side icon="chat" />
            <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
          </q-side-link>
          <q-side-link item to="/twitter">
            <q-item-side icon="rss feed" />
            <q-item-main label="Twitter" sublabel="@quasarframework" />
          </q-side-link>
        </q-list>
      </div>

      <ul class="breadcrumb">
        <!-- <li>
                            <a>
                              <q-icon name="home" />
                            </a>
                          </li> -->
        <!-- <li>
                            <a>
                              <q-icon name="mail" /> Quasar
                            </a>
                          </li>
                          <li>
                            <a>
                              <q-icon name="cloud" /> Breadcrumb
                            </a>
                          </li> -->
      </ul>

      <!-- sub-routes get injected here: -->
      <router-view />

      <q-fixed-position corner="bottom-right" :offset="[16, 16]" style="z-index: 2500">
        <q-fab @open="openTooltips()" @close="closeTooltips()" color="primary" icon="note_add" direction="up">
          <!-- actions -->
          <q-fab-action color="purple" @click="closeTooltips()" icon="shopping_basket">
            <!-- action tooltip -->
            <q-tooltip v-model="showing" ref="gastosTooltip" anchor="center left" self="center right" :offset="[20, 0]">Novo Gasto</q-tooltip>
          </q-fab-action>
        </q-fab>
      </q-fixed-position>

      <!-- Footer -->
      <!-- <q-toolbar slot="footer">
                          <q-toolbar-title>
                            Layout Footer
                          </q-toolbar-title>
                        </q-toolbar> -->
    </q-layout>
  </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'

/*
 * Root component
 */
export default {
  data() {
    return {
      showing: false,
    }
  },
  methods: {
    alert() {
      Dialog.create({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      })
    },
    toast(icon) {
      Toast.create({
        icon,
        html: 'So you want your ' + icon + 's, huh?'
      })
    },
    openTooltips() {
      setTimeout(() => {
        this.$refs.gastosTooltip.open()
      }, 300)
    },
    closeTooltips() {
      setTimeout(() => {
        this.$refs.gastosTooltip.close()
      }, 0)
    }
  }
}
</script>

<style lang="stylus">

main
  text-align center

h1
  clear left

ul.breadcrumb
  margin-top -40px


</style>
