<!--
 * @Name: 列表项
 * @Description: type: 1 (左图又内容), 2 (左内容右图)
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-27 14:50:39
-->
<template>
  <div class="listItemLR" @click="goProductDetail(data.productCode)">
    <div v-if="type == 1" class="l-img-r-price">
      <div class="img-part">
        <img :src="data.pic" class="pic"/>
        <div class="rank-tag">{{data.rank}}</div>
        <div class="img-part-box" v-show="data.themeOpen && data.themeEndTime - nowTime > 0">
          <img src="https://huitongyi-mall.oss-cn-hangzhou.aliyuncs.com/h5/images/img_activity_big.png" />
          <div class="img-part-box-price">
            <div class="img-part-box-price-left small">
              <span class="first">{{data.theme}}</span>
              <span v-if="data.price">
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="normal1">{{translatePrice(data.price, 2)}}</span>
              </span>
              <span v-else>{{data.oriPrice}}</span>
            </div>
            <span class="img-part-box-price-right">{{data.themeStartTime | startTime(data.themeEndTime,that,data.themeOpen)}}</span>
          </div>
        </div>
      </div>
      <div class="price-part">
        <div class="price-part-top">
          <p class="price-part-top-title">{{data.name}}</p>
          <div class="price-part-top-tags">冬季暖心价</div>
          <div class="price-part-top-price">
            <span class="price-part-top-price-now">
              <span class="sign">¥</span>
              <span class="num" v-if="data.price">
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="sign">{{translatePrice(data.price, 2)}}</span>
              </span>
              <span class="num" v-else>{{data.oriPrice}}</span>
            </span>
            <span class="price-part-top-price-old">¥{{data.oriPrice}}</span>
          </div>
        </div>
        <div class="price-part-footer">
          <span>立即抢购</span>
          <img src="https://huitongyi-mall.oss-cn-hangzhou.aliyuncs.com/h5/images/ic_mallcar.png" />
        </div>
      </div>
    </div>
    <div v-else-if="type == 2" class="l-price-r-img">
      <div class="price-part">
        <div class="price-part-top">
          <p class="price-part-top-title">
            {{data.name}}
          </p>
          <div class="price-part-top-tags">冬季暖心价</div>
          <div class="price-part-top-price">
            <span class="price-part-top-price-now">
              <span class="sign">¥</span>
              <span class="num" v-if="data.price">
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="sign">{{translatePrice(data.price, 2)}}</span>
              </span>
              <span class="num" v-else>{{data.oriPrice}}</span>
            </span>
            <span class="price-part-top-price-old">¥{{data.oriPrice}}</span>
          </div>
        </div>
        <div class="price-part-footer">
          <span>立即抢购</span>
          <img src="https://huitongyi-mall.oss-cn-hangzhou.aliyuncs.com/h5/images/ic_mallcar.png" />
        </div>
      </div>
      <div class="img-part">
        <img :src="data.pic" class="pic"/>
        <div class="rank-tag">{{data.rank}}</div>
        <div class="img-part-box" v-show="data.themeOpen && data.themeEndTime - nowTime > 0">
          <img src="https://huitongyi-mall.oss-cn-hangzhou.aliyuncs.com/h5/images/img_activity_big2.png" class="images"/>
          <div class="img-part-box-price">
            <div class="img-part-box-price-left small">
              <span class="first">{{data.theme}}</span>
              <span v-if="data.price">
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="normal1">{{translatePrice(data.price, 2)}}</span>
              </span>
              <span v-else>{{data.oriPrice}}</span>
            </div>
            <span class="img-part-box-price-right">{{data.themeStartTime | startTime(data.themeEndTime,that,data.themeOpen)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listItemLR",
  components: {},
  props: {
    type: {
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
    },
  },
  data() {
    return {
      that: this,
      nowTime: ""
    };
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
      if(price != null && price != undefined && price != "") {
        if(type == 1) {
          return price.toString().split(".")[0]
        } else {
          return "." + price.toString().split(".")[1]
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
  },
};
</script>

<style lang="scss" scoped>
.listItemLR {
  .l-img-r-price {
    width: 100%;
    height: 5.33rem;
    display: flex;
    margin-bottom: 0.226rem;
    .img-part {
      width: 5.33rem;
      height: 100%;
      position: relative;
      .pic {
        width: 5.33rem;
        height: 5.33rem;
        border-radius: 0.213rem 0 0 0.213rem;
      }
      .rank-tag {
        position: absolute;
        top: 0.28rem;
        left: 0.28rem;
        width: 0.8rem;
        height: 0.8rem;
        font-size: 0.533rem;
        color: #FFF8DB;
        text-align: center;
        line-height: 0.8rem;
        background-image: url("https://huitongyi-mall.oss-cn-hangzhou.aliyuncs.com/h5/images/img_hot.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
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
          width: 100%;
          height: 100%;
          &-left {
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            span {
              color: #F9ECD2;
              font-size: 0.65rem;
            }
            span.first {
              font-size: 0.3rem;
            }
          }
          &-right {
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            color: #F9ECD2;
            font-size: 0.32rem;
            margin-bottom: 0.15rem;
          }
        }
      }
    }
    .price-part {
      width: 4.026rem;
      max-width: 4.026rem;
      height: 100%;
      &-top {
        height: 4.13rem;
        background-color: #FFF;
        padding: 0 0.266rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 0 0.213rem 0 0;
        &-title {
          margin-top: 0.266rem;
          color: #333333;
          font-size: 0.4rem;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        &-tags {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.426rem;
          height: 0.693rem;
          background-image: url("https://huitongyi-mall.oss-cn-hangzhou.aliyuncs.com/h5/images/bg_label.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          color: #EB222E;
          font-size: 0.373rem;
          font-weight: 900;
          margin-top: 0.413rem;
          padding-bottom: 0.05rem;
        }
        &-price {
          margin-top: 0.3rem;
          &-now {
            color: #F72A4E;
            .sign {
              font-size: 0.426rem;
            }
            .num {
              font-size: 0.64rem;
            }
          }
          &-old {
            font-size: 0.4rem;
            text-decoration: line-through;
            color: rgba($color: #000000, $alpha: 0.3);
            margin-left: 0.146rem;
          }
        }
      }
      &-footer {
        height: 1.2rem;
        background-color: #FE3E21;
        color: #FFF;
        font-size: 0.426rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        position: relative;
        border:none;
        img {
          width: 0.586rem;
          height: 0.586rem;
          margin-left: 0.133rem;
        }
      }
      &-footer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #FFCC7F;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        border-radius: 0 0 0.426rem 0;
      }
    }
  }
  .l-price-r-img {
    width: 100%;
    height: 5.33rem;
    display: flex;
    margin-bottom: 0.226rem;
    .img-part {
      width: 5.33rem;
      height: 100%;
      position: relative;
      .pic {
        width: 5.33rem;
        height: 5.33rem;
        border-radius: 0 0.213rem 0.213rem 0;
      }
      .rank-tag {
        position: absolute;
        top: 0.28rem;
        left: 0.28rem;
        width: 0.8rem;
        height: 0.8rem;
        font-size: 0.533rem;
        color: #FFF8DB;
        text-align: center;
        line-height: 0.8rem;
        background-image: url("https://huitongyi-mall.oss-cn-hangzhou.aliyuncs.com/h5/images/img_hot.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
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
          width: 100%;
          height: 100%;
          &-left {
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            span {
              color: #F9ECD2;
              font-size: 0.65rem;
            }
            span.first {
              font-size: 0.3rem;
            }
          }
          &-left::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            border-left: 1px solid #FFCC7F;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 200%;
            height: 200%;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-transform-origin: left top;
          }
          &-right {
            width: 60%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            color: #F9ECD2;
            font-size: 0.32rem;
            margin-bottom: 0.15rem;
          }
        }
      }
    }
    .price-part {
      width: 4.026rem;
      max-width: 4.026rem;
      height: 100%;
      &-top {
        height: 4.13rem;
        background-color: #FFF;
        padding: 0 0.266rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 0.213rem 0 0 0;
        &-title {
          margin-top: 0.266rem;
          color: #333333;
          font-size: 0.4rem;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        &-tags {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.426rem;
          height: 0.693rem;
          background-image: url("https://huitongyi-mall.oss-cn-hangzhou.aliyuncs.com/h5/images/bg_label.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          color: #EB222E;
          font-size: 0.373rem;
          font-weight: 900;
          margin-top: 0.413rem;
          padding-bottom: 0.05rem;
        }
        &-price {
          margin-top: 0.3rem;
          &-now {
            color: #F72A4E;
            .sign {
              font-size: 0.426rem;
            }
            .num {
              font-size: 0.64rem;
            }
          }
          &-old {
            font-size: 0.4rem;
            text-decoration: line-through;
            color: rgba($color: #000000, $alpha: 0.3);
            margin-left: 0.146rem;
          }
        }
      }
      &-footer {
        height: 1.2rem;
        background-color: #FE3E21;
        color: #FFF;
        font-size: 0.426rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        position: relative;
        border:none;
        img {
          width: 0.586rem;
          height: 0.586rem;
          margin-left: 0.133rem;
        }
      }
      &-footer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #FFCC7F;
        border-right: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        border-radius: 0 0 0 0.426rem;
      }
    }
  }
  .normal1 {
    font-size: 0.433rem!important;
  }
}
</style>