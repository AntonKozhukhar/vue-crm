<template>
  <div class='app-main-layout'>

    <navbar @showSidebar='isSidebarOpen = !isSidebarOpen'/>
    <sidebar v-model='isSidebarOpen'/>

    <main class='app-content' :class='{ full: !isSidebarOpen }'>
      <div class='app-page'>
        <router-view/>
      </div>
    </main>

    <div class='fixed-action-btn'>
      <router-link class='btn-floating btn-large blue' to='/record'>
        <i class='large material-icons'>add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/app/Navbar'
import Sidebar from '../components/app/Sidebar'

export default {
  name: 'main-layout',
  components: {Sidebar, Navbar},
  data() {
    return {
      isSidebarOpen: true,
    }
  },
}
</script>

<style scoped>

</style>