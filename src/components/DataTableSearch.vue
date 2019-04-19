<template>
<div>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 800px; max-width: 90vw;">
      <p class="caption"> <strong>{{ titulo }}</strong><span style="float: right;"><q-btn size="sm" color="secondary" label="nuevo" @click="customDialogModel = true" /></span></p>
  <q-table
    :pagination.sync="paginationControl"
    :data="datat"
    :columns="columns"
    :filter="filter"
    selection="multiple"
    :selected.sync="selected"
    row-key="id"
    color="secondary"
  >
    <template slot="top-left" slot-scope={}>
      <q-search
        placeholder="Buscar"
        hide-underline
        v-model="filter"
        class="col-6"
      />
    </template>
    <template slot="top-right" slot-scope="props">
      <q-btn
        flat round dense
        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
        @click="props.toggleFullscreen"
      />
    </template>

    <template>
      <q-tr slot="header" slot-scope="props">
        <q-th auto-width>
          <q-checkbox
            v-if="props.multipleSelect"
            v-model="props.selected"
            indeterminate-value="some"
          />
        </q-th>
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>

    <template slot="body" slot-scope="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-checkbox color="primary" v-model="props.selected" />
          </q-td>
          <q-td key="desc" :props="props">
            <q-checkbox color="primary" v-model="props.expand" checked-icon="remove" unchecked-icon="add" class="q-mr-md" />
            {{ props.row.id }}
          </q-td>
          <q-td key="nombre" :props="props">{{ props.row.nombre }}</q-td>
          <q-td key="prestamo" :props="props">{{ props.row.prestamo }}</q-td>
          <q-td key="fecha" :props="props">{{ props.row.fecha }}</q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left"> <strong>{{ props.row.nombre }}</strong> tiene una deuda por pagar de <b class="detalle"> {{ props.row.monto_a_apagar }}. </b> Responsable: <b> {{ props.row.agregado }} </b></div>
          </q-td>
        </q-tr>
      </template>
      <div slot="pagination" slot-scope="props" class="row flex-center q-py-sm">
        <q-btn
          round dense size="sm" icon="undo" color="secondary" class="q-mr-sm"
          :disable="props.isFirstPage"
          @click="props.prevPage"
        />
        <div class="q-mr-sm" style="font-size: small">Page {{ props.pagination.page }} / {{ props.pagesNumber }}</div>
        <q-btn
          round dense size="sm" icon="redo" color="secondary"
          :disable="props.isLastPage"
          @click="props.nextPage"
        />
      </div>
  </q-table>

  </div>
  </q-page>
  <!-- <pre>{{ $data }}</pre> -->
  </div>
</template>

<script>
export default {
  // props: ['titulo', 'columns', 'datat'],
  props: {
    titulo: {
      type: String,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    datat: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    loading: true,
    filter: '',
    selected: [],
    paginationControl: { rowsPerPage: 6, page: 1 }
  })
}
</script>

 <style scoped>
 .detalle {
   color: red;
 }
 </style>
