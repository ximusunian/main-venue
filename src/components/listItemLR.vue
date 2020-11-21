<!--
 * @Name: 列表项
 * @Description: type: 1 (左图又内容), 2 (左内容右图)
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-21 16:08:33
-->
<template>
  <div class="listItemLR" @click="goProductDetail(data.productCode)">
    <div v-if="type == 1" class="l-img-r-price">
      <div class="img-part">
        <img :src="data.pic" class="pic"/>
        <div class="rank-tag">{{data.rank}}</div>
        <div class="img-part-box">
          <img src="@/assets/images/img_activity_big.png" />
          <div class="img-part-box-price">
            <div class="img-part-box-price-left small">
              <span class="first" v-if="data.rank == 1">双十一抢货价</span>
              <span class="first" v-else>活动价¥</span>
              <span>
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="normal1">.{{translatePrice(data.price, 2)}}</span>
              </span>
            </div>
            <span class="img-part-box-price-right">{{timeTxt}}</span>
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
              <span class="num">
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="sign">.{{translatePrice(data.price, 2)}}</span>
              </span>
            </span>
            <span class="price-part-top-price-old">¥{{data.oriPrice}}</span>
          </div>
        </div>
        <div class="price-part-footer">
          <span>立即抢购</span>
          <img src="@/assets/images/ic_mallcar.png" />
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
              <span class="num">
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="sign">.{{translatePrice(data.price, 2)}}</span>
              </span>
            </span>
            <span class="price-part-top-price-old">¥{{data.oriPrice}}</span>
          </div>
        </div>
        <div class="price-part-footer">
          <span>立即抢购</span>
          <img src="@/assets/images/ic_mallcar.png" />
        </div>
      </div>
      <div class="img-part">
        <img :src="data.pic" class="pic"/>
        <div class="rank-tag">{{data.rank}}</div>
        <div class="img-part-box">
          <img src="@/assets/images/img_activity_big2.png" />
          <div class="img-part-box-price">
            <div class="img-part-box-price-left small">
              <span class="first" v-if="data.rank == 1">双十一抢货价</span>
              <span class="first" v-else>活动价¥</span>
              <span>
                <span>{{translatePrice(data.price, 1)}}</span>
                <span class="normal1">.{{translatePrice(data.price, 2)}}</span>
              </span>
            </div>
            <span class="img-part-box-price-right">{{timeTxt}}</span>
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
    return {};
  },
  created() {},
  mounted() {},
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
        background-image: url("../assets/images/img_hot.png");
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
            margin-bottom: 0.18rem;
          }
        }
      }
    }
    .price-part {
      width: 4.026rem;
      max-width: 4.026rem;
      height: 100%;
      margin-left: -1px;
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
          width: 2.426rem;
          height: 0.693rem;
          background-image: url("../assets/images/bg_label.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          color: #EB222E;
          font-size: 0.373rem;
          text-align: center;
          line-height: 0.693rem;
          margin-top: 0.413rem;
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
        border-radius: 0 0 0.213rem 0;
        color: #FFF;
        font-size: 0.426rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: 0.5px solid #FFCC7F;
        border-top: 0;
        img {
          width: 0.586rem;
          height: 0.586rem;
          margin-left: 0.133rem;
        }
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
        background-image: url("../assets/images/img_hot.png");
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
            margin-bottom: 0.18rem;
          }
        }
      }
    }
    .price-part {
      width: 4.026rem;
      max-width: 4.026rem;
      height: 100%;
      margin-left: -1px;
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
          width: 2.426rem;
          height: 0.693rem;
          background-image: url("../assets/images/bg_label.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          color: #EB222E;
          font-size: 0.373rem;
          text-align: center;
          line-height: 0.693rem;
          margin-top: 0.413rem;
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
        border-radius: 0 0 0 0.213rem;
        color: #FFF;
        font-size: 0.426rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: 0.5px solid #FFCC7F;
        border-top: 0;
        img {
          width: 0.586rem;
          height: 0.586rem;
          margin-left: 0.133rem;
        }
      }
    }
  }
  .normal1 {
    font-size: 0.433rem!important;
  }
}
</style>