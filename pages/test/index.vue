<template>
  <view class="test">
    <button @click="showLoading('1')">加载1</button>
    <button @click="showLoading('https://oss.huizustore.com/8e534874f3f941fd9c3071f589405dbc.webp')">加载2</button>
    <button @click="showLoading('https://oss.huizustore.com/d77dfd8b6f954224847ad540c786f819.gif')">加载3</button>
    <button @click="showLoading('https://oss.huizustore.com/6027d978f1124634b34253102cfb0d33.gif')">加载4</button>
  </view>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
function showLoading(src) {
  proxy.$loading.show({
    show: true,
    src,
  });
}
</script>

<style lang="scss" scoped></style>
