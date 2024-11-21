<template>
    <div class="wrap">
        <div class="top">
            <div class="hosname">北京xxxx医院</div>
            <div class="line"></div>
            <div>专科</div>
            <div class="dot"></div>
            <div class="hosdeparment">XXXXX门诊</div>
        </div>
        <div class="center">
            <h1 class="title">2023年6月3日</h1>
            <div class="container">
                <div class="item" v-for="item in 6" :key="item">
                    <div class="top1">123</div>
                    <div class="bottom">123</div>
                </div>
            </div>
            <el-pagination layout="prev, pager, next" :total="50" />
        </div>
    </div>
</template>
    
<script setup>

</script>
    
<style scoped lang="less">
    .wrap {
        margin-left: 40px;
        margin-top: 20px;
        .top {
            display: flex;
            color: #7f7f7f;
            .line {
                width: 3px;
                height: 20px;
                background-color: skyblue;
                margin: 0 5px;
            }
            .dot {
                margin: 0 5px;
                color: skyblue;
            }
        }
        .center {
            margin: 20px 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .title {
                font-weight: 900;
            }
            .container {
                width: 100%;
                display: flex;
                margin-top: 50px;
                margin-bottom: 30px;
                .item {
                    flex: 1;
                    border: 1px solid skyblue;
                    margin: 0 5px;
                    width: 100%;
                    .top1 {
                        background-color: #e8f2ff;
                        height: 30px;
                        width: 100%;
                        text-align: center;
                        line-height: 30px;
                    }
                    .bottom {
                        width: 100%;
                        height: 60px;
                        text-align: center;
                        line-height: 60px;
                    }
                }
            }
        }
    }
</style>