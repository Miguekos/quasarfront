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
          Prestamos
          <div slot="subtitle">Version {{ $q.version }}</div>
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
         dense
         color="tertiary"
         square
         text-color
         >
          <q-item>
            <q-item-side avatar="/statics/icons/icon-128x128.png" />
            <q-item-main>
              <div contentClass>
                <q-item-tile label>{{ usuario.name }}</q-item-tile>
                <q-item-tile class="text-white" sublabel>{{ usuario.email  }}</q-item-tile>
              </div>

            </q-item-main>
          </q-item>
        </q-card>
        <q-item @click.native="url('/')">
          <q-item-side icon="dashboard" />
          <q-item-main label="Dashboard" sublabel="Pantalla principal" />
        </q-item>
        <q-item @click.native="url('/clientes')">
          <q-item-side icon="group" />
          <q-item-main label="Clientes" sublabel="Administracion" />
        </q-item>
        <q-item @click.native="url('/user')">
          <q-item-side icon="perm_identity" />
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
      usuario: [],
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    logout () {
      // localStorage.removeItem('accToken')
      this.$q.cookies.remove('accToken')
      this.$router.push('/login')
      localStorage.removeItem('datadelusuario')
    },
    url (ruta) {
      this.$router.replace(ruta)
    }
  },
  created () {
    this.usuario = JSON.parse(localStorage.getItem('datadelusuario'))
  }
}
</script>

<style>
</style>
