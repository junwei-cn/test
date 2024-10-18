<template>
  <view class="test">
    <button @click="showLoading">加载</button>
  </view>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
function showLoading() {
  proxy.$loading.show({
    show: true,
  });
}
</script>

<style lang="scss" scoped></style>
