<template>
  <view class="mask" @click="stopLoading">
    <view @click.stop="" :class="['loading', showLoading ? 'show' : '']">
      <image :src="loadingSrc" style="width: 100rpx; height: 100rpx; margin: 25rpx"></image>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
onLoad((option) => {
  console.log(1111, option.params);
  if (option?.params == '1') {
    loadingSrc = 'https://oss.huizustore.com/e6ec8c4d502b43d7b105653652a362fa.gif';
  } else {
    loadingSrc = option?.params;
  }
  showLoading.value = true;
});
let showLoading = ref(false);
let loadingSrc = ref();
function stopLoading() {
  setTimeout(() => {
    uni.navigateBack();
  }, 300);
}
</script>

<style scoped lang="scss">
.mask {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading {
    width: 0;
    height: 0;
    border-radius: 20rpx;
    background-color: rgba(0, 0, 0, 0.6);
    // transform: scale(0);
    overflow: hidden;
  }
  .show {
    width: 150rpx;
    height: 150rpx;
    // transform: scale(1);
    // transition: all 3s;
  }
}
</style>
<style>
page {
  background-color: transparent;
}
</style>
