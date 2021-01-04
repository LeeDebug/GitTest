<template>
  <div class="imContainer">
    <div
      class="header"
      :style="{
        'background': pcChannelCssTmp.sessionWindow.windowColor || 'linear-gradient(90deg, #2076F1, #2D91F5, #2076F1)',
      }"
    >
      <div class="statusBar fr">
        <i class="iconfont iconV7fangkeduan_jingyin" @click="handleIframeChangeVoice"></i>
        <i class="iconfont iconV7fangkeduan-13" @click="handleIframeMinimize"></i>
        <i class="iconfont iconV7fangkeduan_guanbi" @click="handleIframeClose"></i>
      </div>
      <div class="profile clear">
        <img :src="pcChannelCssTmp.sessionWindow.companyLogo || systemAvatar" class="profileAvatar fl" alt="">
        <div class="profileHeader fl">
          <div class="nickname">{{ pcChannelCssTmp.name || '坐席昵称' }}</div>
          <div class="abbreviation">{{ pcChannelCssTmp.sessionWindow.companyName || '企业简称' }}</div>
        </div>
      </div>
    </div>

    <div id="messageBox" class="messageBox">
      <div class="loadMore">
        <p v-if="haveMoreHistory" @click="handleLoadHistory">点击加载更多历史记录</p>
        <span v-else>没有更多了</span>
      </div>
      <div v-for="(item, index) in activeMsgList" :key="index">
        <webchatMsgItem :chatMsg="item"></webchatMsgItem>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive, ref, toRef } from 'vue'
import systemAvatar from '../../assets/img/avatar.png'
import webchatMsgItem from '@/views/webim/components/webchatMsgItem.vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'ImContainer',
  components: {
    webchatMsgItem,
  },
  // props: {
  //   testArray: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },
  emits: ['handleLoadHistory'],
  setup(props, ctx) {
    const store = useStore()

    const pcChannelCssTmp = computed(() => store.state.webim.imOss.pcChannelCssTmp)
    const activeMsgList = computed(() => store.state.webim.activeMsgList)
    const haveMoreHistory = computed(() => store.state.webim.haveMoreHistory)
    const showIframe = computed(() => store.state.webim.showIframe)

    function handleLoadHistory() {
      ctx.emit('handleLoadHistory')
    }

    /** 页面静音 */
    function handleIframeChangeVoice() {
      console.log('页面静音')
    }

    /** 最小化iframe弹窗 */
    function handleIframeMinimize() {
      store.commit('webim/SET_SHOW_IFRAME', false)
    }

    /** 关闭iframe弹窗 */
    function handleIframeClose() {
      console.log('关闭iframe弹窗')
    }

    return {
      systemAvatar,
      pcChannelCssTmp,
      activeMsgList,
      haveMoreHistory,
      showIframe,
      handleLoadHistory,
      handleIframeChangeVoice,
      handleIframeMinimize,
      handleIframeClose,
    }
  }
})
</script>

<style lang="stylus" scoped>
@import '~@/assets/common.styl'
.imContainer
  height calc(100% - 110px - 34px)
  border-top-left-radius inherit
  border-top-right-radius inherit
  .header
    height 70px
    padding 14px
    border-top-left-radius inherit
    border-top-right-radius inherit
    & > .statusBar
      height 0
      & > i
        color white
        font-size 14px
        font-weight 600
        cursor pointer
      & > i + i
        margin-left 10px
    & > .profile
      // clear both
      & > .profileAvatar
        height 40px
        width 40px
        border-radius 50%
      & > .profileHeader
        // 去掉宽度后，就能点击上面的小icon了，但如果屏幕变小了名称会换行
        // width calc(100% - 40px)
        height 100%
        padding-left 12px
        color $c-white
        & > .nickname
          height 17px
          font-size 16px
          font-weight 600
        & > .abbreviation
          margin-top 9px
          font-size 12px
          font-weight 400
  .messageBox
    height calc(100% - 70px)
    overflow-x hidden
    overflow-y auto
    background $c-white
    text-align center
    & > .loadMore
      margin 14px 0
      font-size 12px
      font-weight 400
      color #767E91
      line-height 12px
      text-align center
      & > p
        cursor pointer
        // border 1px solid red
        &:hover
          color $hover-blue
</style>
