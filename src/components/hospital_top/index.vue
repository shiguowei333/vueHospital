<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="goHome">
        <img src="@/assets/images/logo.png">
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p @click="login" v-if="!userStore.userInfo.name">登录/注册 </p>
        <el-dropdown v-else>
          <span class="el-dropdown-link">
            {{ userStore.userInfo.name }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>实名认证</el-dropdown-item>
              <el-dropdown-item>挂号订单</el-dropdown-item>
              <el-dropdown-item>就诊人管理</el-dropdown-item>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import userUserStore from '@/store/modules/user'
  import { ArrowDown } from '@element-plus/icons-vue'

  let userStore = userUserStore()
  const $router = useRouter()
  const goHome = () => {
    $router.push({path: '/home'})
  }
  const login = () => {
    userStore.visiable = true
  }
  const logout = () => {
    userStore.logout()
    localStorage.removeItem('USERINFO')
    $router.push('/')
  }
</script>

<style scoped lang="less">
  .top {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 1px 5px rgb(218, 211, 211);
    .content {
      width: 70%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        align-items: center;
        img {
          height: 60px;
          margin-right: 20px;
        }
        p {
          font-size: 30px;
          color: #55a6fe;
        }
      }

      .right {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #aaa;
        .help {
          margin-right: 10px;
        }
      }

    }
  }
</style>