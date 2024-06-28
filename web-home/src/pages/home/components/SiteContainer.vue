<script setup lang="ts">
import SiteNavBar from './SiteNavBar.vue'
import SiteGroupList from './SiteGroupList.vue'
import SiteModal from './SiteModal.vue'
</script>

<template>
  <div text="$text-c-1" z-8>
    <!--分类-->
    <SiteNavBar />
    <!--分组-->
    <SiteGroupList py-28 style="margin-left: auto; margin-right: auto;" />
    <!--一个节点-->
    <SiteModal />
  </div>
</template>
