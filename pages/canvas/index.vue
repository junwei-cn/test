<template>
  <view class="">
    <canvas id="canvas" width="300" height="300"></canvas>
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
onLoad(() => {
  init();
});
const sun = new Image();
const moon = new Image();
const earth = new Image();
function init() {
  sun.src = 'https://oss.huizustore.com/dd260763ed81439f8f10f462aca0181c.jpg';
  moon.src = 'https://oss.huizustore.com/f6c33a16b8794bb7b0eb2fa7b9b7cecd.jpg';
  earth.src = 'https://oss.huizustore.com/88c3148e3e464af59a71f40ecb596a94.jpg';
  window.requestAnimationFrame(draw);
}

function draw() {
  const ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // 清除画布

  ctx.fillStyle = 'rgb(0 0 0 / 40%)';
  ctx.strokeStyle = 'rgb(0 153 255 / 40%)';
  ctx.save();
  ctx.translate(150, 150);

  // 地球
  const time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // 阴影
  ctx.drawImage(earth, -12, -12);

  // 月亮
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // 地球轨道
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}
</script>

<style scoped lang="scss"></style>
