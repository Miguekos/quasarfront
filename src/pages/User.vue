<template>
  <q-page padding class="docs-input row justify-center">
     <q-dialog
    v-model="customDialogModel"
    prevent-close
    @ok="postUser"
    @cancel="onCancel"
  >
    <div slot="body">
      <p class="caption"> Nuevo Usuario</p>
      <q-field
      :count = 16
      >
        <q-input inverted stack-label="Nombre" type="text" v-model="name" />
      </q-field>

      <q-field
      :count = 16
      >
        <q-input inverted type="email" stack-label="Email" v-model="email" />
      </q-field>

      <q-field
      :count = 16
      >
      <q-select
      stack-label="Role"
      inverted
      :options="selectOptions"
      v-model="role"
    />
      </q-field>

      <q-field
      :count = 16
      >
        <q-input inverted type="text" stack-label="Password" v-model="password" />
      </q-field>
    </div>

    <template slot="buttons" slot-scope="props">
      <q-btn flat color="positive" label="Guardar" @click="props.ok" />
      <q-btn flat color="negative" label="Cancelar" @click="props.cancel" />
    </template>
  </q-dialog>

    <div style="width: 600px; max-width: 90vw;">
      <p class="caption">Usuarios <span style="float: right;"><q-btn size="sm" flat color="positive" label="nuevo" @click="customDialogModel = true" /></span></p>
      <q-table
        :data="tableData"
        :columns="columns"
        row-key="name"
      />
    </div>

    <!-- <pre>{{ $data }}</pre> -->
  </q-page>
</template>

<script>
export default {
  data: () => ({
    selectOptions: [
      {
        label: 'Guest',
        value: 'guest'
      },
      {
        label: 'Admin',
        value: 'admin'
      }
    ],
    customDialogModel: false,
    name: '',
    email: '',
    role: '',
    password: '',
    columns: [
      {
        name: 'desc',
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
      },
      {
        required: true,
        label: 'Role',
        align: 'left',
        field: 'role',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      }
    ],
    tableData: [
    ]
  }),
  methods: {
    // when props.ok() gets called
    onOk (data) { },

    // when props.cancel() gets called
    onCancel () { },

    // when we show it to the user
    onShow () { },

    // when it gets hidden
    onHide () { },

    getUser () {
      this.$axios.get('/api/tbusers')
        .then((response) => {
          this.tableData = response.data
          console.log('Se cargaron los Usuarios')
          this.LimpiarForm()
        })
        .catch(errors => {
          console.log(errors)
        })
    },
    postUser () {
      let data = {
        name: this.name,
        email: this.email,
        role: this.role,
        password: this.password
      }
      this.$axios.post('/api/tbusers', data)
        .then((response) => {
          this.customDialogModel = false
          this.getUser()
          console.log('Se guardo correctamente')
          alert('se guardo correctamente')
          this.LimpiarForm()
        })
        .catch(errors => {
          console.log(errors)
        })
    },
    LimpiarForm () {
      this.name = ''
      this.email = ''
      this.role = ''
      this.password = ''
    }
  },
  mounted () {
    this.getUser()
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
