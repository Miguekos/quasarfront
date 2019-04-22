<template>
  <div>
    <DataTableComp @actualizarcliente="getData()" :titulo='titulo' :columns='columns' :datat='tableData'></DataTableComp>
    <!-- <pre>{{ $data }}</pre> -->
  </div>

</template>

<script>
export default {
  data: () => ({
    titulo: 'Clientes',
    tableData: [],
    columns: [
      {
        name: 'desc',
        required: true,
        label: '#',
        align: 'left',
        field: 'id',
        sortable: true
      },
      { name: 'nombre', label: 'Nombre', field: 'nombre', align: 'left', sortable: true },
      { name: 'prestamo', label: 'Prestamo', field: 'prestamo', align: 'left', sortable: true },
      { name: 'fecha', label: 'Fecha', field: 'fecha', align: 'left', sortable: true }
    ]
  }),
  methods: {
    getData () {
      this.$axios
        .get('/api/clientes')
        .then(response => {
          this.tableData = response.data
          console.log('Se cargaron los Clientes')
          console.log(response.data)
          // this.LimpiarForm()
        })
        .catch(errors => {
          console.log(errors)
        })
    }
  },
  components: {
    DataTableComp: () => import('../components/DataTableSearch.vue')
  },
  created () {
    this.getData()
  }
}
</script>
