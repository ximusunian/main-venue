<!--
 * @Description: 首页
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-18 18:04:26
-->
<template>
  <div id="index">
    <header>
      <img src="@/assets/images/banner-top.png" class="header-bg" />
      <div class="countdown-title">
        <span class="divider">——</span>
        <p><span>距活动</span><span class="big">开始</span></p>
        <span class="divider">——</span>
      </div>
    </header>
    <div class="container">
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.days }}</span>
          <span class="colon">天</span>
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">时</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">分</span>
          <span class="block">{{ timeData.seconds }}</span>
          <span class="colon">秒</span>
        </template>
      </van-count-down>

      <div class="activity activity-collection">
        <div class="activity-collection-main">
          <img src="@/assets/images/img_good_manners.png" class="activity-collection-main-left"/>
          <div class="activity-collection-main-right">
            <p class="date">11月27日-11月29日</p>
            <p class="title">百万豪礼 大馈赠</p>
            <p class="desc">提前加入购物车</p>
            <p class="desc">赠送意外惊喜 等你来领取</p>
            <div class="btn">立即领取</div>
          </div>
        </div>
      </div>

      <div class="activity activity-draw">
        <div class="activity-draw-main">
          <div class="activity-draw-main-left">
            <p class="title">下单参与抽奖</p>
            <p class="desc">有机会翻苹果MacBook Air电脑、苹果手机、98寸液晶电视等多重好礼等你来领。</p>
            <div class="btn">立即领取</div>
          </div>
          <img src="@/assets/images/img_gifts.png" class="activity-draw-main-right"/>
        </div>
      </div>

      <titleLine style="margin-top: 0.733rem" title="爆款热卖前10排行榜单"></titleLine>
      <div class="rank-list">
        <div class="first-to-five odd-item">
          <div class="img-part">
            <div class="img-part-box">
              <img src="@/assets/images/img_activity_big.png" />
              <div class="img-part-box-price">
                <div class="img-part-box-price-left">
                  <span>双十一抢货价</span>
                  <span>67.00</span>
                </div>
                <span class="img-part-box-price-right">12月02日 24点结束</span>
              </div>
              
            </div>
          </div>
          <div class="price-part"></div>
        </div>
        <div class="first-to-five even-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import titleLine from "@/components/titleLine"
import { CountDown } from "vant";
export default {
  name: "index",
  components: {
    titleLine,
    [CountDown.name]: CountDown,
  },
  data() {
    return {
      time: 60 * 60 * 24 * 2 * 1000,
      timeData: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#index {
  header {
    max-height: 12.3376rem;
    position: relative;
    .header-bg {
      width: 100%;
    }
    .countdown-title {
      width: 100%;
      position: absolute;
      bottom: 0.5rem;
      font-size: 0.533rem;
      display: flex;
      align-items: center;
      color: #FFF;
      justify-content: center;
      p {
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        letter-spacing: 0.1rem;
        .big {
          font-size: 0.693rem;
        }
      }
    }
  }
  .container {
    background-image: linear-gradient(#F8395C, #F9183B);
    padding: 0 0.32rem 0.533rem;
    .van-count-down {
      display: flex;
      justify-content: center;
      color: #FFF;
      font-size: 0.4224rem;
      margin-bottom: 0.386rem;
      .block {
        display: inline-block;
        // width: 0.3696rem;
        color: #fff;
        // font-size: 12px;
        text-align: center;
        // background-color: #1B1B1B;
      }
    }

    .activity {
      padding: 0.266rem;
      height: 4.746rem;
      border-radius: 0.32rem;
      background-image: linear-gradient(to right,#ED0B38, #E5173F);
    }
    .activity-collection {
      &-main {
        display: flex;
        height: 4.746rem;
        border-radius: 0.32rem;
        border: 1px dashed #FEF5CF;
        &-left {
          width: 3.64rem;
          height: 3.64rem;
          margin-left: 0.36rem;
          margin-top: 1.026rem;
        }
        &-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 0.106rem;
          .date {
            color: #FBE2AE;
            font-size: 0.426rem;
            margin-top: 0.386rem;
          }
          .title {
            color: #FFF;
            font-size: 0.586rem;
            margin-top: 0.213rem;
            margin-bottom: 0.16rem;
          }
          .desc {
            color: #FFF;
            font-size: 0.373rem;
          }
          .btn {
            width: 2.633rem;
            height: 0.746rem;
            font-size: 0.4rem;
            color: #EA0F3B;
            text-align: center;
            line-height: 0.746rem;
            border-radius: 0.746rem;
            background-image: linear-gradient(to right, #FEF6D1, #FFD08D);
            margin-top: 0.32rem;
          }
        }
      }
    }

    .activity-draw {
      &-main {
        display: flex;
        &-left {
          max-width: 4.12rem;
          margin-left: 0.4rem;
          color: #FFF;
          .title {
            font-size: 0.586rem;
            margin-top: 0.653rem;
          }
          .desc {
            font-size: 0.373rem;
            margin-top: 0.08rem;
          }
          .btn {
            width: 2.633rem;
            height: 0.746rem;
            font-size: 0.4rem;
            color: #EA0F3B;
            text-align: center;
            line-height: 0.746rem;
            border-radius: 0.746rem;
            background-image: linear-gradient(to right, #FEF6D1, #FFD08D);
            margin-top: 0.32rem;
          }
        }
        &-right {
          width: 4.4rem;
          height: 4.213rem;
          margin-top: 0.933rem;
        }
      }
    }

    .rank-list {
      .first-to-five {
        width: 100%;
        height: 5.33rem;
        .img-part {
          width: 5.33rem;
          height: 100%;
          position: relative;
          &-box {
            position: absolute;
            bottom: 0;
            height: 1.44rem;
            img {
              width: 100%;
              height: 100%;
              position: relative;
            }
            &-price {
              position: absolute;
              bottom: 0;
              display: flex;
              height: 100%;
              &-left {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                span {
                  color: #F9ECD2;
                  font-size: 0.65rem;
                }
                span:first-child {
                  font-size: 0.3rem;
                }
              }
              &-right {
                display: flex;
                align-items: flex-end;
                color: #F9ECD2;
                font-size: 0.32rem;
                margin-bottom: 0.2rem;
                margin-left: 0.3rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
