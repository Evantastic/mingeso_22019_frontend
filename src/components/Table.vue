<template>
    <div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="postulants"
      class="elevation-1"
    >
      <template v-slot:header.name="{ header }">
        {{ header.text.toUpperCase() }}
      </template>
    </v-data-table>
  </v-app>
</div>
</template>
<script>
export default {
    data: () => ({
        headers: [
      {
        text: 'Nombre',
        align: 'left',
        value: 'name',
      },
      { text: 'Rut', value: 'rut' },
      { text: 'Fecha Nacimiento', value: 'birthDay' },
      { text: 'Carrera', value: 'career' },
    ],
    postulants: [
      {
        name: 'Vicente Hernandez',
        rut: '12345678-9',
        birthDay: '21-06-1995',
        career: 'Ingeniería en lo que sea',
      },
      {
        name: 'Fabian Santibanez',
        rut: '87654321-9',
        birthDay: '21-06-1996',
        career: 'Ingeniería en lo que sea',
      },]

    })
}
</script>