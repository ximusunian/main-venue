<!--
 * @Name: 列表项
 * @Description: type: 1 (一行两图宽), 2 (一行三图宽); tags: 0 (无标签), 1 (排名标签), 2 (爆款标签), 3 (推荐标签)
 * @version: 1.0
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-18 18:04:26
-->
<template>
  <div class="listItemTB">
    <div class="two-col">
      <div class="two-col-top">
        <img src="" />
        <div class="two-col-top-tag">6</div>
        <div class="slogan-box">
          <div class="slogan-box-l">
            <span class="title">活动价¥</span>
            <span class="num">67.00</span>
          </div>
          <div class="slogan-box-r">12月02日 24点结束</div>
        </div>
      </div>
      <div class="two-col-bottom">
        <p class="two-col-bottom-title">
          <span>杰尼波比9118超纤维特级材料加绒篮球鞋百百白哈哈哈</span>
        </p>
        <div class="two-col-bottom-btn">立即抢购</div>
      </div>
    </div>
    <div class="three-col">
      <div class="three-col-top">
        <img src="" />
        <div class="three-col-top-tag">10</div>
        <div class="slogan-box">
          <div class="slogan-box-l">
            <span class="title">活动价¥</span>
            <span class="num">67.00</span>
          </div>
          <div class="slogan-box-r">12月02日24点结束</div>
        </div>
      </div>
      <div class="three-col-bottom">
        <div class="three-col-bottom-box">
          <span class="three-col-bottom-box-title">杰尼波比9118超纤维特级材料加绒篮球鞋百百白哈哈哈</span>
          <div class="three-col-bottom-box-price">
            <span class="new"><span class="sign">¥</span><span class="num">67.00</span></span>
            <span class="old">¥96.50</span>
          </div>
        </div>
        <div class="three-col-bottom-btn">立即抢购</div>
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
    }
  },
  data() {
    return {

    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
  .listItemTB {
    .two-col {
      width: 4.6rem;
      &-top {
        width: 100%;
        height: 4.6rem;
        position: relative;
        &-tag {
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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 0.12rem;
            .title {
              font-size: 0.3rem;
              margin-top: 0.06rem;
            }
            .num {
              font-size: 0.48rem;
            }
          }
          &-r {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            font-size: 0.32rem;
            margin-bottom: 0.12rem;
            margin-left: 0.2rem;
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
        height: 4.6rem;
        position: relative;
        &-tag {
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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 0.06rem;
            .title {
              font-size: 0.266rem;
              margin-top: 0.06rem;
            }
            .num {
              font-size: 0.426rem;
            }
          }
          &-r {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
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