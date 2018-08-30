<template>
  <div class="tab--panel-wrapper" :name="name">
    <div class="tab--panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabPanel',
  props: {
    name: { // Tab模块名
      required: true
    }
  }
}
</script>

<style scoped>
.tab--panel-content {
  margin-top: 10px;
  border: 1px solid blue
}
</style>
