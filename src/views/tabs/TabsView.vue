<template>
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="me" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'

const route = useRoute()
const router = useRouter()
console.log(route.name)
// active用于记录当前tab

const active = ref(route.name as string)

watch(active, (newVal) => {
  router.push({
    name: newVal
  })
})
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
