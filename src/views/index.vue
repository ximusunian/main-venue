<!--
 * @Description: 首页
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-22 18:22:42
-->
<template>
  <div id="index">
    <header>
      <img :src="headerImg" class="header-bg" />
      <div class="countdown-title">
        <span class="divider">——</span>
        <p><span>距活动</span><span class="big">{{txt}}</span></p>
        <span class="divider">——</span>
      </div>
    </header>
    <div class="container">
      <div class="box">
        <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒">
          <template #default="timeData">
            <span class="lock">
              <span class="block">{{translateTime(timeData.days, 1)}}</span>
              <span class="block">{{translateTime(timeData.days, 2)}}</span>
            </span>
            <span class="colon">天</span>
            <span class="lock">
              <span class="block">{{translateTime(timeData.hours, 1)}}</span>
              <span class="block">{{translateTime(timeData.hours, 2)}}</span>
            </span>
            <span class="colon">时</span>
            <span class="lock">
              <span class="block">{{translateTime(timeData.minutes, 1)}}</span>
              <span class="block">{{translateTime(timeData.minutes, 2)}}</span>
            </span>
            <span class="colon">分</span>
            <span class="lock">
              <span class="block">{{translateTime(timeData.seconds, 1)}}</span>
              <span class="block">{{translateTime(timeData.seconds, 2)}}</span>
            </span>
            <span class="colon">秒</span>
          </template>
        </van-count-down>

        <div class="activity activity-collection">
          <div class="activity-collection-main">
            <img
              src="@/assets/images/img_good_manners.png"
              class="activity-collection-main-left"
            />
            <div class="activity-collection-main-right">
              <p class="date">11月27日-11月29日</p>
              <p class="title">百万豪礼 大馈赠</p>
              <p class="desc">提前加入购物车</p>
              <p class="desc">赠送意外惊喜 等你来领取</p>
              <div class="btn" @click="toToast">立即领取</div>
            </div>
          </div>
        </div>

        <div class="activity activity-draw">
          <div class="activity-draw-main">
            <div class="activity-draw-main-left">
              <p class="title">下单参与抽奖</p>
              <p class="desc">
                有机会翻苹果MacBook
                Air电脑、苹果手机、98寸液晶电视等多重好礼等你来领。
              </p>
              <div class="btn" @click="toActivity">立即领取</div>
            </div>
            <img
              src="@/assets/images/img_gifts.png"
              class="activity-draw-main-right"
            />
          </div>
        </div>

        <titleLine style="margin-top: 0.733rem" title="爆款热卖前10排行榜单"></titleLine>
        <div class="rank-list">
          <listItemLR v-for="(item, index) in rankList.list1" :key="index" :type="(index+1) % 2 == 0? 2: 1" :data="item" :timeTxt="timeTxt"></listItemLR>
          <div class="list-two">
            <listItemTB v-for="(item, index) in rankList.list2" :key="index" :type="1" :tags="1" :data="item" :timeTxt="timeTxt"></listItemTB>
          </div>
          <div class="list-three">
            <listItemTB v-for="(item, index) in rankList.list3" :key="index" :type="2" :tags="1" :data="item" :timeTxt="timeTxt"></listItemTB>
          </div>
        </div>
      </div>

      <div class="main-box">
        <van-tabs type="card" class="classification" sticky>
          <van-tab v-for="(item, index) in tabList" :key="index" :title="item.name">
            <div class="classification-second" v-if="item.list.length != 0">
              <van-tabs scrollspy sticky offset-top="1.066rem">
                <div v-if="item.product.length != 0">
                  <titleLine style="margin-top: 0.533rem" :title="item.otherName"></titleLine>
                  <div class="classification-list-two">
                    <listItemTB v-for="(items, index) in item.newProduct.two" :key="index" :type="1" :tags="items.tags" :data="items" :timeTxt="timeTxt"></listItemTB>
                  </div>
                  <div class="classification-list-other">
                    <listItemTB v-for="(items, index) in item.newProduct.other" :key="index" :type="3" :tags="items.tags" :data="items" :timeTxt="timeTxt"></listItemTB>
                  </div>
                </div>

                <van-tab v-for="(item1, index1) in item.list" :title="item1.name" :key="index1">
                  <titleLine style="margin-top: 0.533rem" :title="item1.otherName"></titleLine>
                  <div class="classification-list-two">
                    <listItemTB v-for="(items, index) in item1.two" :key="index" :type="1" :tags="items.tags" :data="items" :timeTxt="timeTxt"></listItemTB>
                  </div>
                  <div class="classification-list-other">
                    <listItemTB v-for="(items, index) in item1.product" :key="index" :type="3" :tags="items.tags" :data="items" :timeTxt="timeTxt"></listItemTB>
                  </div>
                </van-tab>

              </van-tabs>
            </div>
            
            <div v-else>
              <titleLine style="margin-top: 0.533rem" :title="item.otherName"></titleLine>
              <div class="classification-list-two">
                <listItemTB v-for="(items, index) in item.newProduct.two" :key="index" :type="1" :tags="items.tags" :data="items" :timeTxt="timeTxt"></listItemTB>
              </div>
              <div class="classification-list-other">
                <listItemTB v-for="(items, index) in item.newProduct.other" :key="index" :type="3" :tags="items.tags" :data="items" :timeTxt="timeTxt"></listItemTB>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="operation">
      <img src="@/assets/images/ic_refresh.png" class="refresh" @click="refresh"/>
      <img src="@/assets/images/ic_topping.png" class="topping" @click="toTop"/>
    </div>

    <van-overlay :show="noLogin">
      <div class="login-box">
        <div class="top">
          <span class="tips">您还没有登录哦～</span>
          <img src="@/assets/images/img_not_loggedin.png" class="login-bg"/>
          <img src="@/assets/images/btn.png" class="login-btn" @click="toLogin"/>
        </div>
        <img src="@/assets/images/ic_close.png" class="close-btn" @click="closeLogin"/>
      </div>
      
    </van-overlay>
  </div>
</template>

<script>
import titleLine from "@/components/titleLine";
import listItemLR from "@/components/listItemLR";
import listItemTB from "@/components/listItemTB";
import { CountDown, Tab, Tabs, Overlay} from "vant";
export default {
  name: "index",
  components: {
    titleLine,
    listItemLR,
    listItemTB,
    [CountDown.name]: CountDown,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Overlay.name]: Overlay
  },
  data() {
    return {
      noLogin: false,
      headerImg: "",
      url: "",
      txt: "开始",
      time: 60 * 60 * 24 * 3 * 1000,
      timeData: {
        days: "DD",
        hours: "HH",
        minutes: "mm",
        seconds: "ss",
      },
      rankList: {
        list1: [],
        list2: [],
        list3: []
      },
      timeTxt: "",
      tabList: [],
      token: "",
      appType: ""
    };
  },
  created() {
    let token = this.$route.query.token
    if(token == null || token == undefined || token == "") {
      this.noLogin = true
    } else {
      this.token = token
    }
    this.appType = this.$route.query.appType
    this.getWinterGrabGoods()
    this.getWinterGrabGoodsClassify()
  },
  mounted() {},
  methods: {
    // 获取推荐商品信息
    getWinterGrabGoods() {
      this.$api.getWinterGrabGoods().then(res => {
        this.headerImg = res.data.img
        let list = res.data.list[0].data
        list.map((item, index) => {
          item.rank = index + 1
        })
        this.rankList.list1 = list.slice(0, 5)
        this.rankList.list2 = list.slice(5, 7)
        this.rankList.list3 = list.slice(7, list.length+1)
        this.url = res.data.url
        let newDate = new Date().getTime()
        if(newDate - res.data.middle < 0) {
          this.txt = "开始"
          this.time = res.data.middle - newDate
          this.timeTxt = this.format(res.data.middle, "m月d日 H时") + "开始";
        } else {
          this.txt = "结束"
          this.time = res.data.end - newDate
          this.timeTxt = this.format(res.data.end, "m月d日 H时") + "结束";
        }
      })
    },

    // 获取分类商品信息
    getWinterGrabGoodsClassify() {
      this.$api.getWinterGrabGoodsClassify().then(res => {
        let list = res.data.stringList
        list.map((item, index) => {
          item.list.map((item1, index1) => {
            let two = []
            item1.product.map((item2, index2) => {
              if(item2.label == "爆款") {
                item2.tags = 2
              } else if(item2.label == "推荐") {
                item2.tags = 3
              } else {
                item2.tags = 0
              }
              if(index2 < 2) {
                two.push(item2)
              }
            })
            item1.two = two
            item1.product.splice(0, 2);
          })
          let twoCol = []
          item.product.map((item3, index3) => {
            if(item3.label == "爆款") {
              item3.tags = 2
            } else if(item3.label == "推荐") {
              item3.tags = 3
            } else {
              item3.tags = 0
            }
            if(index3 < 2) {
              twoCol.push(item3) 
            }
          })
          item.newProduct = {}
          item.newProduct.two = twoCol
          item.product.splice(0, 2)
          item.newProduct.other = item.product;
        })
        this.tabList = list
      })
    },

    // 点击百万豪礼弹框
    toToast() {
      this.$toast("快去挑选货品添加到购物车，活动下单，优惠多多")
    },

    toActivity() {
      window.location = `${this.url}?token=${this.token}&appType=${this.appType}`
    },

    // 刷新
    refresh() {
      location.reload();
    },
    
    // 返回顶部
    toTop() {
      var timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5); 
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        if(osTop === 0){
          clearInterval(timer);
        }
      },30)
    },

    /**
     * @name: translateTime
     * @msg: 时间处理函数
     * @Author: ximusunian
     * @param {Number} time 时间
     * @param {Number} type 处理类型: 1: 取十位上的数、2: 取个位上的数
     * @return {Number}
     */
    translateTime(time, type) {
      if(time >= 10) {
        if(type == 1) {
          return parseInt(time / 10)
        } else {
          return time % 10
        }
      } else {
        if(type == 1) {
          return 0
        } else {
          return time
        }
      }
    },

    format(timestamp, formats) {
      // formats格式包括
      // 1. Y-m-d
      // 2. Y-m-d H:i:s
      // 3. Y年m月d日
      // 4. Y年m月d日 H时i分
      formats = formats || "Y-m-d";

      var zero = function (value, m) {
        if (m) {
          return value;
        }
        if (value < 10) {
          return "0" + value;
        }
        return value;
      };

      var myDate = timestamp ? new Date(timestamp) : new Date();

      var year = myDate.getFullYear();
      var month = zero(myDate.getMonth() + 1, 1);
      var day = zero(myDate.getDate());

      var hour = zero(myDate.getHours());
      var minite = zero(myDate.getMinutes());
      var second = zero(myDate.getSeconds());

      return formats.replace(/Y|m|d|H|i|s/gi, function (matches) {
        return {
          Y: year,
          m: month,
          d: day,
          H: hour,
          i: minite,
          s: second,
        }[matches];
      });
    },

    toLogin() {
      if (this.$route.query.appType == "IOS") {
        window.webkit.messageHandlers.goLoginJumpToPay.postMessage({});
      } else {
        window["reLoad"] = function(url) {
          location.replace(url);
          location.reload()
        };
        window.goLoginJumpToPay.OnClick("");
      }
    },
    
    closeLogin() {
      this.noLogin = false
    }
  },
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
      color: #fff;
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
    padding-bottom: 0.533rem;
    background-image: linear-gradient(#f8395c, #f9183b);
    .box {
      padding: 0 0.32rem;
    }

    .van-count-down {
      display: flex;
      justify-content: center;
      color: #fff;
      font-size: 0.4224rem;
      margin-bottom: 0.386rem;
      .lock {
        .block {
          display: inline-block;
          width: 0.3696rem;
          color: #fff;
          font-size: 0.4572rem;
          text-align: center;
          background-color: #1B1B1B;
          border-radius: 0.0528rem;
        }
        .block:first-child {
          margin-right: 0.05rem;
        }
      }
      .colon {
        margin: 0 0.12rem;
      }
    }

    .activity {
      padding: 0.266rem;
      height: 4.746rem;
      border-radius: 0.32rem;
      background-image: linear-gradient(to right, #ed0b38, #e5173f);
    }

    .activity-collection {
      &-main {
        display: flex;
        height: 4.746rem;
        border-radius: 0.32rem;
        border: 1px dashed #fef5cf;
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
            color: #fbe2ae;
            font-size: 0.426rem;
            margin-top: 0.386rem;
          }
          .title {
            color: #fff;
            font-size: 0.586rem;
            margin-top: 0.213rem;
            margin-bottom: 0.16rem;
          }
          .desc {
            color: #fff;
            font-size: 0.373rem;
          }
          .btn {
            width: 2.633rem;
            height: 0.746rem;
            font-size: 0.4rem;
            color: #ea0f3b;
            text-align: center;
            line-height: 0.746rem;
            border-radius: 0.746rem;
            background-image: linear-gradient(to right, #fef6d1, #ffd08d);
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
          color: #fff;
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
            color: #ea0f3b;
            text-align: center;
            line-height: 0.746rem;
            border-radius: 0.746rem;
            background-image: linear-gradient(to right, #fef6d1, #ffd08d);
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

    .main-box {
      margin-top: 0.266rem;
    }

    .list-two {
      display: flex;
      justify-content: space-between;
    }

    .list-three {
      display: flex;
      .listItemTB {
        margin-right: 0.16rem;
      }
    }

    .list-other {
      display: flex;
      flex-wrap: wrap;
      padding-left: 0.16rem;
      .listItemTB {
        margin-left: 0.16rem;
      }
    }

    .classification-list-two {
      display: flex;
      padding: 0 0.32rem;
      justify-content: space-between;
    }
    
    .classification-list-other {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0.16rem;
      .listItemTB {
        margin-left: 0.16rem;
      }
    }
  }
  .operation {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80%;
    right: 0.32rem;
    .refresh, .topping {
      width: 0.853rem;
      height: 0.853rem;
    }
    .refresh {
      margin-bottom: 0.32rem;
    }
  }
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .top {
      width: 64%;
      height: 8.546rem;
      position: relative;
      .login-bg {
        width: 100%;
      }
      .tips {
        display: inline-block;
        width: 100%;
        text-align: center;
        font-size: 0.426rem;
        color: #FFF;
        position: absolute;
        top: 1.706rem;
      }
      .login-btn {
        position: absolute;
        width: 77%;
        height: 1.066rem;
        left: 11.5%;
        bottom: 0.5rem;
      }
    }
    .close-btn {
      width: 1.066rem;
      height: 1.066rem;
      margin-top: 0.5rem;
    }
    
  }
}
</style>
