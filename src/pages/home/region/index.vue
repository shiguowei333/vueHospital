<template>
    <div class="region">
      <div class="content">
        <div class="left">地区：</div>
        <ul class="right">
          <li class="active">全部</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
          <li>昌平区</li>
        </ul>
      </div>
    </div>
</template>
  
<script setup>
  
</script>
  
<style scoped lang="less">
  .region {
    color: #7f7f7f;
    margin: 10px 0;
    .content {
      display: flex;
      .left {
        margin-right: 10px;
        flex-shrink: 0;
      }
      .right {
        display: flex;
        flex-wrap: wrap;
        li {
          margin-bottom: 10px;
          margin-right: 10px;
          &.active {
            color: #55a6fe;
          }
          &:hover {
            color: #55a6fe;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>