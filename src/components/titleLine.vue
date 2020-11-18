<!--
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-27 10:33:23
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-18 17:21:38
-->
<template>
   <div id="titleLine">
     <img src="@/assets/images/img_left.png" />
     <span>{{title}}</span>
     <img src="@/assets/images/img_right.png" />
   </div>
</template>

<script>
export default {
  name: "titleLine",
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: ""
    },
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
#titleLine {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 0.933rem;
    height: 0.653rem;
  }
  span {
    color: #FFF;
    font-weight: 600;
    font-size: 0.48rem;
    margin: 0 0.266rem;
  }
}
</style>
