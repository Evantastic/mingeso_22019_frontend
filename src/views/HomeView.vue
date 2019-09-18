<template>
  <div>
    <DevopsComponent  />
    <GroupContainer />
  </div>
</template>

<script>

// Cada vista estará en la carpeta views, y cada view podrá llamar a tanton componentes
// como la vista lo necesite.


// para no confundirnos en el codigó separanemos los componentes de cada vista
// en la carpeta components 

// los componentes que son globales los dejaremos fuera de cualquier carpeta.


import DevopsComponent from "@/components/HomeComponents/DevopsComponent";
import GroupContainer from "@/components/HomeComponents/GroupContainer";

export default {
  components: {
    DevopsComponent,
    GroupContainer
  }
};
</script>

<style scoped>

.ultra-padding {
  padding-top: 50px;
}

</style>
