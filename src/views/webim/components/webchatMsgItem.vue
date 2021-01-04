<template>
  <div class="webchatMsgItem clearfix">
    <!-- #region 系统消息 -->
    <div v-if="watchChatMsg.type === 'system'" class="systemMsg">
      {{(watchChatMsg.createTime ? watchChatMsg.createTime : '')  + ' ' + watchChatMsg.content}}
    </div>
    <!-- #endregion -->

    <!-- #region 非系统消息 -->
    <div
      v-if="watchChatMsg.type !== 'system'"
      class="clearfix msgBody"
      :class="{
        'fr': watchChatMsg.type === 'in',
        'fl': watchChatMsg.type !== 'in'
      }"
    >

      <!-- #region 头像 -->
      <div
        class="clearfix msgHeader"
        :class="{
          'fr tr': watchChatMsg.type === 'in',
          'fl tl': watchChatMsg.type !== 'in'
        }"
      >
        <img
          :src="watchChatMsg.userHeadImg || systemAvatar"
          alt=""
          class="headImg"
        />
      </div>
      <!-- #endregion -->

      <!-- #region 消息主体 -->
      <div
        class="msgContainerBox"
        :class="{
          'fr inBox': watchChatMsg.type === 'in',
          'fl outBox': watchChatMsg.type !== 'in'
        }"
      >
        <!-- #region 时间，独占一行 -->
        <div
          class="time"
          :class="{
            'tr': watchChatMsg.type === 'in',
            'tl': watchChatMsg.type !== 'in'
          }"
        >
          {{
            (watchChatMsg.userName ? watchChatMsg.userName + '&nbsp;&nbsp;&nbsp;' : '')
            + (watchChatMsg.createTime ? watchChatMsg.createTime : '')
          }}
        </div>
        <!-- #endregion -->

        <!-- 访客端发送消息的loading -->
        <!-- <div
          class="fl sendStatus"
          v-if="watchChatMsg.type === 'in' && watchChatMsg.sendStatus === 'sending'"
          :class="{
            success: watchChatMsg.sendStatus === 'success'
          }"
        ></div> -->

        <!-- #region 消息内容（区分多种类型） -->
        <div
          class="msgContent"
          :class="{
            'fr inMsgCont': watchChatMsg.type === 'in',
            'fl outMsgCont': watchChatMsg.type !== 'in'
          }"
        >

          <!-- 纯文本 -->
          <div
            v-if="watchChatMsg.contentType === 'text'"
            v-html="watchChatMsg.content"
            :class="{
              'inTextBgc': watchChatMsg.type === 'in',
              'outTextBgc': watchChatMsg.type !== 'in'
            }"
            :style="
              watchChatMsg.type === 'in'
              ? ({ 'background-color': pcChannelCssTmp.sessionWindow.windowColor || '#2582f2' })
              : ''
            "
          ></div>

          <!-- 图片消息 -->
          <img
            v-if="watchChatMsg.contentType === 'image'"
            :src="watchChatMsg.content"
            class="imageMsg"
          />

        </div>
        <!-- #endregion -->
      </div>
      <!-- #endregion -->

    </div>
    <!-- #endregion -->
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, toRef, toRefs, watchEffect } from 'vue'
import systemAvatar from '@/assets/img/avatar.png'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'WebchatMsgItem',
  props: {
    chatMsg: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, ctx) {
    const store = useStore()
    const pcChannelCssTmp = computed(() => store.state.webim.imOss.pcChannelCssTmp)

    let refProps = toRef(props, 'chatMsg')
    let watchChatMsg = computed(() => {
      // console.log('refProps.value:\n', refProps.value)
      if (refProps.value.userId === 'system') { // 系统消息
        refProps.value.userHeadImg = store.state.webim.imOss.pcChannelCssTmp.sessionWindow.systemHead
      } else if (refProps.value.userHeadImg && refProps.value.userHeadImg.indexOf('base64') < 0) { // 坐席头像
        refProps.value.userHeadImg = '//' + store.state.webim.fileDomain.common + '/' + refProps.value.userHeadImg
      }
      return refProps.value
    })

    return {
      pcChannelCssTmp,
      systemAvatar,
      watchChatMsg,
    }
  },
})
</script>
<style lang="stylus">
@import '~@/assets/common.styl'
.webchatMsgItem
  width 100%
  padding 0 14px 14px 14px
  border 1px solid red
  & > .systemMsg
    text-align center
    color $c-systemMsg-gray
  // 非系统消息
  & > .msgBody
    width 100%
    // 头像
    & > .msgHeader
      width 40px
      height 100%
      & > .headImg
        width 30px
        height 30px
        border-radius 50%
    // 消息主体
    & > .msgContainerBox
      border 1px solid $c-white
      line-height 20px
      width calc(100% - 40px)
      & > .time
        color $c-msgName-gray
        font-weight 500
      // 消息内容（区分多种类型）
      & > .msgContent
        width 100%
        & > .outTextBgc
          color $c-outMsg-gray
          background-color $bg-outMsg-bg-gray
          width fit-content
          border-radius 4px 10px 10px 10px
          padding 10px
          text-align left
        & > .inTextBgc
          color $c-inMsg-white
          background-color $bg-inMsg-bg-blue
          width fit-content
          border-radius 10px 4px 10px 10px
          padding 10px
          text-align left
          // max-width calc(100% - 40px)
          & > a
            color white
        & > .imageMsg
          background-color $c-white
          border 1px solid $border-main
          border-radius 10px
          // max-width calc(100% - 40px)
          max-width 66%
    & > .outBox
      // margin-left 40px
    & > .inBox
      // margin-right 40px
      & > .sendStatus
        display inline-block
        // background url('~@/assets/img/msgLoading.gif') no-repeat
        background-size 20px 20px
        margin 10px
        width 20px
        height 20px
      & > .sendStatus.success
        display none
</style>