<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <p class="caption"> <strong>{{ titulo }}</strong><span style="float: right;"><q-btn size="sm" color="secondary" label="nuevo" @click="customDialogModel = true" /></span></p>
      <q-table
        :data="datat"
        :columns="columnas"
        row-key="name"
      />
    </div>
    <!-- <pre>{{ $data }}</pre> -->
  </q-page>
</template>

<script>
export default {
  props: ['titulo', 'columnas', 'datat'],
  data: () => ({
    filter: '',
    filas: [],
    info: []
  }),
  methods: {
    eliminarUser () {
      console.log('esta es la funcion eliminar Usuario')
    }
  },
  created () {
    this.info = this.datat
    this.filas = this.columnas
  }
}
</script>

<style lang="stylus">
  .modal-buttons {
    padding: 22px 8px 8px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: center;
    color: #027be3;
    color: var(--q-color-primary);
  }

  .modal-scroll {
    max-height: 640px;
  }
</style>
