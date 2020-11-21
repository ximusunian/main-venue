<!--
 * @Name: 列表项
 * @Description: type: 1 (一行两图宽), 2 (一行三图宽), 3 (一行三图宽2); tags: 0 (无标签), 1 (排名标签), 2 (爆款标签), 3 (推荐标签)
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-21 18:19:39
-->
<template>
  <div class="listItemTB" @click="goProductDetail(data.productCode)">
    <div v-if="type == 1" class="two-col">
      <div class="two-col-top">
        <img :src="data.pic" class="pic"/>
        <div v-if="tags == 1" class="two-col-top-tag">{{data.rank}}</div>
        <div v-if="tags == 2" class="two-col-top-tag1"></div>
        <div v-if="tags == 3" class="two-col-top-tag2"></div>
        <div class="slogan-box" v-show="data.themeOpen && data.themeEndTime - nowTime > 0">
          <div class="slogan-box-l">
            <span class="title">{{data.theme}}</span>
            <span class="num">
              <span>{{translatePrice(data.price, 1)}}</span>
              <span class="sm">.{{translatePrice(data.price, 2)}}</span>
            </span>
          </div>
          <div class="slogan-box-r">{{data.themeStartTime | startTime(data.themeEndTime,that,data.themeOpen)}}</div>
        </div>
      </div>
      <div class="two-col-bottom">
        <p class="two-col-bottom-title">
          <span>{{data.name}}</span>
        </p>
        <div class="two-col-bottom-btn">立即抢购</div>
      </div>
    </div>
    <div v-if="type == 2" class="three-col">
      <div class="three-col-top">
        <img :src="data.pic" class="pic"/>
        <div class="three-col-top-tag">{{data.rank}}</div>
        <div class="slogan-box"  v-show="data.themeOpen && data.themeEndTime - nowTime > 0">
          <div class="slogan-box-l">
            <span class="title">{{data.theme}}</span>
            <span class="num">
              <span>{{translatePrice(data.price, 1)}}</span>
              <span class="sm">.{{translatePrice(data.price, 2)}}</span>
            </span>
          </div>
          <div class="slogan-box-r">{{data.themeStartTime | startTime(data.themeEndTime,that,data.themeOpen)}}</div>
        </div>
      </div>
      <div class="three-col-bottom">
        <div class="three-col-bottom-box">
          <span class="three-col-bottom-box-title">{{data.name}}</span>
          <div class="three-col-bottom-box-price">
            <span class="new">
              <span class="sign">¥</span>
              <span class="num">
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="sm">.{{translatePrice(data.price, 2)}}</span>
              </span>
            </span>
            <span class="old">¥{{data.oriPrice}}</span>
          </div>
        </div>
        <div class="three-col-bottom-btn">立即抢购</div>
      </div>
    </div>
    <div v-if="type == 3" class="three-col-small">
      <div class="three-col-small-top">
        <img :src="data.pic" class="pic" />
        <div v-if="tags == 2" class="three-col-small-top-tag1"></div>
        <div v-if="tags == 3" class="three-col-small-top-tag2"></div>
        <div class="slogan-box" v-show="data.themeOpen && data.themeEndTime - nowTime > 0">
          <div class="slogan-box-l">
            <span class="title">{{data.theme}}</span>
            <span class="num">
              <span>{{translatePrice(data.price, 1)}}</span>
              <span class="sm">.{{translatePrice(data.price, 2)}}</span>
            </span>
          </div>
          <div class="slogan-box-r">
            {{data.themeStartTime | startTime(data.themeEndTime,that,data.themeOpen)}}
            <!-- <span>{{substring(timeTxt, 1)}}</span>
            <span>{{substring(timeTxt, 2)}}</span> -->
          </div>
        </div>
      </div>
      <div class="three-col-small-bottom">
        <div class="three-col-small-bottom-box">
          <span class="three-col-small-bottom-box-title">{{data.name}}</span>
          <div class="three-col-small-bottom-box-price">
            <span class="new">
              <span class="sign">¥</span>
              <span class="num">
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="sm">.{{translatePrice(data.price, 2)}}</span>
              </span>
            </span>
            <span class="old">¥{{data.oriPrice}}</span>
          </div>
        </div>
        <div class="three-col-small-bottom-btn">立即抢购</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listItemTB",
  components: {

  },
  props: {
    type: {
      type: Number,
      default: 1,
      required: true,
    },
    tags: {
      type: Number,
      default: 1,
      required: true,
    },
    data: {
      type: Object,
      default: {},
      required: true
    },
    timeTxt: {
      type: String,
      default: "",
      required: true
    }
  },
  data() {
    return {
      that: this,
      nowTime: ""
    }
  },
  created() {
    this.nowTime = Date.parse(new Date());
  },
  mounted() {},
  filters: {
    startTime(start, end, that, isOpen) {
      let nowTime = Date.parse(new Date());
      //判断是否开始
      if (start - nowTime > 0) {
        //未开始
        return that.format(start, "m月d号 H:i") + "开始";
      } else if (start - nowTime < 0 && end - nowTime > 0) {
        //开始没结束
        return that.format(end, "m月d号 H:i") + "结束";
      } else if (nowTime - end > 0) {
        isOpen = false;
      }
    },
  },
  methods: {
    // 去详情
    goProductDetail(prodCode) {
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
        wx.miniProgram.getEnv((res) => {
          this.weChat = true;
          if (res.miniprogram) {
            wx.miniProgram.navigateTo({
              url: `/pages/goods_details/index?prodCode=${prodCode}&&classifyId=-1`,
            });
          } else {
            alert("不在小程序里");
          }
        });
      } else {
        let u = navigator.userAgent;
        let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isIOS) {
          window.webkit.messageHandlers.goDetail.postMessage({
            prodCode: prodCode, //vue给iOS传值
          });
        }
        if (isAndroid) {
          let strParameter = JSON.stringify({
            prodCode: prodCode,
          });
          window.goDetail.OnClick(strParameter);
        }
      }
      /**********/
    },

    /**
     * @name: translatePrice
     * @msg: 价格处理函数
     * @Author: ximusunian
     * @param {Number} price 价格
     * @param {Number} type  处理类型: 1: 裁剪整数部分、2: 裁剪小数部分
     * @return {Number}
     */    
    translatePrice(price, type) {
      if(type == 1) {
        return price.toString().split(".")[0]
      } else {
        return price.toString().split(".")[1]
      }
    },

    

    substring(str, type) {
      let idx = str.indexOf("日")
      if(type == 1) {
        return str.substring(0, idx+1)
      } else {
        return str.substring(idx+1)
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
  },
}
</script>

<style lang="scss" scoped>
  .listItemTB {
    margin-top: 0.226rem;
    .two-col {
      width: 4.6rem;
      &-top {
        width: 100%;
        height: 4.6rem;
        position: relative;
        .pic {
          width: 4.6rem;
          height: 4.6rem;
          border-radius: 0.2133rem 0.2133rem 0 0;
        }
        &-tag {
          position: absolute;
          top: 0.173rem;
          left: 0.16rem;
          width: 0.72rem;
          height: 0.72rem;
          font-size: 0.4752rem;
          color: #FFF8DB;
          text-align: center;
          line-height: 0.72rem;
          background-image: url("../assets/images/img_recommend.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        &-tag1 {
          position: absolute;
          top: 0.173rem;
          left: 0.16rem;
          width: 1.106rem;
          height: 1.106rem;
          background-image: url("../assets/images/img_hugely_popular.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        &-tag2 {
          position: absolute;
          top: 0.173rem;
          left: 0.16rem;
          width: 1.2rem;
          height: 0.76rem;
          background-image: url("../assets/images/img_activity_recommendation.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .slogan-box {
          width: 100%;
          height: 1.253rem;
          position: absolute;
          bottom: 0;
          display: flex;
          background-image: url("../assets/images/img_activity_medium.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          color: #F9ECD2;
          &-l {
            width: 31%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            // padding: 0 0.12rem;
            .title {
              font-size: 0.3rem;
              margin-top: 0.06rem;
            }
            .num {
              font-size: 0.48rem;
              .sm {
                font-size: 0.38rem;
              }
            }
          }
          &-r {
            width: 67%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            font-size: 0.32rem;
            margin-bottom: 0.12rem;
            margin-left: 2%;
          }
        }
      }
      &-bottom {
        width: 100%;
        &-title {
          background-color: #FFF;
          padding: 0.133rem 0.266rem;
          
          span {
            color: #333333;
            font-size: 0.4rem;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            /* autoprefixer: ignore next */
            -webkit-box-orient: vertical;
          }
        }
        &-btn {
          width: 100%;
          height: 1.066rem;
          color: #FFF;
          font-size: 0.453rem;
          text-align: center;
          line-height: 1.066rem;
          background-color: #FE3E21;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          border: 0.5px solid #FFCC7F;
          border-top: 0;
          border-radius: 0 0 0.2133rem 0.2133rem;
        }
      }
    }
    .three-col {
      width: 3.02rem;
      &-top {
        width: 100%;
        height: 3.02rem;
        position: relative;
        .pic {
          width: 3.02rem;
          height: 3.02rem;
          border-radius: 0.2133rem 0.2133rem 0 0;
        }
        &-tag {
          position: absolute;
          top: 0.16rem;
          left: 0.16rem;
          width: 0.62rem;
          height: 0.62rem;
          font-size: 0.4rem;
          color: #FFF8DB;
          text-align: center;
          line-height: 0.62rem;
          background-image: url("../assets/images/img_recommend.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .slogan-box {
          width: 100%;
          height: 1.253rem;
          position: absolute;
          bottom: 0;
          display: flex;
          background-image: url("../assets/images/img_activity_small.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          color: #F9ECD2;
          &-l {
            width: 38%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .title {
              // font-size: 0.266rem;
              font-size: 0.2rem;
              margin-top: 0.06rem;
            }
            .num {
              font-size: 0.426rem;
              .sm {
                font-size: 0.266rem;
              }
            }
          }
          &-r {
            width: 62%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            font-size: 0.2rem;
            margin-bottom: 0.03rem;
          }
        }
      }
      &-bottom {
        width: 100%;
        &-box {
          background-color: #FFF;
          padding: 0.133rem 0.266rem;
          &-title {
            color: #333333;
            font-size: 0.35rem;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            /* autoprefixer: ignore next */
            -webkit-box-orient: vertical;
          }
          &-price {
            margin-top: -0.3rem;
            .new {
              height: 100%;
              color: #F72A4E;
              .sign {
                font-size: 0.3rem;
              }
              .num {
                font-size: 0.45rem;
                .sm {
                  font-size: 0.3733rem;
                }
              }
            }
            .old {
              font-size: 0.346rem;
              color: rgba($color: #000000, $alpha: 0.3);
              margin-left: 0.05rem;
              text-decoration: line-through;
            }
          }
        }
        &-btn {
          width: 100%;
          height: 0.693rem;
          color: #FFF;
          font-size: 0.4rem;
          text-align: center;
          line-height: 0.693rem;
          background-color: #FE3E21;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          border: 0.5px solid #FFCC7F;
          border-top: 0;
          border-radius: 0 0 0.2133rem 0.2133rem;
        }
      }
    }
    .three-col-small {
      width: 3.02rem;
      &-top {
        width: 100%;
        height: 3.02rem;
        position: relative;
        .pic {
          width: 3.02rem;
          height: 3.02rem;
          border-radius: 0.2133rem 0.2133rem 0 0;
        }
        &-tag1 {
          position: absolute;
          top: 0.16rem;
          left: 0.16rem;
          width: 0.88rem;
          height: 0.88rem;
          background-image: url("../assets/images/img_hugely_popular_small.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        &-tag2 {
          position: absolute;
          top: 0.16rem;
          left: 0.16rem;
          width: 0.96rem;
          height: 0.6rem;
          background-image: url("../assets/images/img_activity_recommendation_small.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .slogan-box {
          width: 100%;
          height: 1.253rem;
          position: absolute;
          bottom: 0;
          display: flex;
          background-image: url("../assets/images/img_activity_min.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          color: #F9ECD2;
          &-l {
            width: 43%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .title {
              // font-size: 0.266rem;
              font-size: 0.24rem;
              margin-top: 0.06rem;
            }
            .num {
              font-size: 0.426rem;
              .sm {
                font-size: 0.266rem;
              }
            }
          }
          &-r {
            width: 57%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            font-size: 0.2rem;
            margin-bottom: 0.02rem;
          }
        }
      }
      &-bottom {
        width: 100%;
        &-box {
          background-color: #FFF;
          padding: 0.133rem 0.266rem;
          &-title {
            color: #333333;
            font-size: 0.35rem;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            /* autoprefixer: ignore next */
            -webkit-box-orient: vertical;
          }
          &-price {
            margin-top: -0.3rem;
            .new {
              height: 100%;
              color: #F72A4E;
              .sign {
                font-size: 0.3rem;
              }
              .num {
                font-size: 0.45rem;
                .sm {
                  font-size: 0.3733rem;
                }
              }
            }
            .old {
              font-size: 0.346rem;
              color: rgba($color: #000000, $alpha: 0.3);
              margin-left: 0.05rem;
              text-decoration: line-through;
            }
          }
        }
        &-btn {
          width: 100%;
          height: 0.693rem;
          color: #FFF;
          font-size: 0.4rem;
          text-align: center;
          line-height: 0.693rem;
          background-color: #FE3E21;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          border: 0.5px solid #FFCC7F;
          border-top: 0;
          border-radius: 0 0 0.2133rem 0.2133rem;
        }
      }
    }
  }
</style>