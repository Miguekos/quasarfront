<template>
  <div>
    <DataTableComp :titulo='titulo' :columnas='columns' :datat='tableData'></DataTableComp>
  </div>
</template>

<script>
export default {
  data: () => ({
    titulo: 'Usuarios',
    tableData: [],
    columns: [
      {
        name: 'desc',
        required: true,
        label: '#',
        align: 'left',
        field: 'id',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        required: true,
        label: 'Nombre',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        required: true,
        label: 'Email',
        align: 'left',
        field: 'email',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      }
    ]
  }),
  methods: {
    getData () {
      this.$axios
        .get('/api/users')
        .then(response => {
          this.tableData = response.data
          console.log('Se cargaron los Usuarios')
          console.log(response.data)
          // this.LimpiarForm()
        })
        .catch(errors => {
          console.log(errors)
        })
    }
  },
  components: {
    DataTableComp: () => import('../components/DataTable.vue')
  },
  created: function () {
    // `this` points to the vm instance
    this.getData()
    console.log("'a is: ' + this.a")
  }
}
</script>
