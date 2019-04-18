<template>
  <!-- <q-layout view="lHh Lpr lFf"> -->
  <q-layout view="hHr LpR lFf">

    <q-layout-header>
      <q-toolbar
        color="secondary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Serverkos
          <div slot="subtitle">Running on Quasar{{ $q.version }}</div>
        </q-toolbar-title>
        <q-btn flat round dense @click="logout()"  icon="logout" />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        style="padding-top: 0px;"
        no-border
        link
        inset-delimiter
      >
        <!-- <q-list-header>Administracion</q-list-header> -->
        <q-card
         color="tertiary"
         square
         text-color
         >
          <q-item>
            <q-item-side avatar="/statics/icons/icon-128x128.png" />
            <q-item-main>
              <div contentClass>
                <q-item-tile label>Admin</q-item-tile>
                <q-item-tile sublabel>Subhead</q-item-tile>
              </div>

            </q-item-main>
          </q-item>
        </q-card>
        <q-item @click.native="url('/')">
          <q-item-side icon="school" />
          <q-item-main label="Dashboard" sublabel="Pantalla principal" />
        </q-item>
        <q-item @click.native="url('/user')">
          <q-item-side icon="code" />
          <q-item-main label="Usuarios" sublabel="Mantenimiento de usuario" />
        </q-item>
        <q-item @click.native="logout()">
          <q-item-side icon="logout" />
          <q-item-main label="logout" sublabel="Cerrar Sesion" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    logout () {
      // localStorage.removeItem('accToken')
      this.$q.cookies.remove('accToken')
      this.$router.push('/login')
    },
    url (ruta) {
      this.$router.replace(ruta)
    }
  }
}
</script>

<style>
</style>
