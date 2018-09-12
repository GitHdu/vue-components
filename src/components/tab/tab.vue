<template>
  <div class="tab-wrapper">
    <div class="tab__header"
         ref="tabHeaderItem">
      <div class="tab__header__item">
        <div style="width: 100%;">
          <div class="tab__item"
               @click="tabItemClick(item.name,key)"
               @touchstart="tabItemClick(item.name,key)"
               v-for="(item,key) in tabList"
               :key="key"
               :class="{'tab--active':activeTab.index===key}">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tab__content"
         ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      tabList: [], // tab标题列表
      activeTab: { // 已激活的tab信息
        index: 0, // 下标
        name: '' // 名称
      }
    }
  },
  watch: {
    'activeTab.index': {
      handler (newValue, oldValue) {
        this.$refs.content.children[oldValue].classList.remove('tab--panel-wrapper--active')
        this.$refs.content.children[newValue].classList.add('tab--panel-wrapper--active')
      }
    }
  },
  methods: {
    tabItemClick (name, key) {
      this.activeTab.name = name
      this.activeTab.index = key
    },
    _initScroll: function () {
      /* eslint-disable no-new */
      new BScroll(this.$refs.tabHeaderItem, {
        scrollX: true, // 是否支持X滚动
        bounce: true // 是否开启回弹动画
      })
    }
  },
  mounted () {
    let self = this // 外层新建变量引用this
    this.$slots.default.forEach((components) => { // 循环default内的内容
      if (components.tag && components.componentOptions) { // 如果子元素tag键&&componentOptions有内容。
        self.tabList.push(components.componentOptions.propsData)
        // 在components.componentOptions这个键内 有propsDate这个属性。我们可以通过这个属性拿到子组件的props值
      }
      setTimeout(() => {
        this.$nextTick(() => { // 避免data未更新
          this._initScroll()
        }
        )
      }, 20)
    })
    this.$nextTick(() => { // 避免data未更新
      this.activeTab = { // 给activeTab赋初始值
        index: 0, // 默认选中第一个
        name: this.tabList[0].name // 寻找tabList第一个元素 还有他的名字
      }
      this.$refs.content.children[0].classList.add('tab--panel-wrapper--active')
    })
  }
}
</script>

<style scoped>
.iconfont {
  font-size: 1.5rem;
}

.tab__header {
  display: flex;
}

.tab__header__item {
  margin: 0;
}

.tab__header__item > div {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  transition: transform 0.3s;
}

.tab__item {
  font-size: 1.3rem;
  cursor: pointer;
  margin-right: 1rem;
  flex: 1;
  text-align: center;
}

.tab--active > span {
  border-bottom: 2px solid #1890ff;
  color: #1890ff;
  padding-bottom: 0.5rem;
}

.tab__header__btn--left {
  margin-right: 0.5rem;
  cursor: pointer;
}

.tab__header__btn--right {
  margin-left: 0.5rem;
  cursor: pointer;
}

.tab--panel-wrapper {
  display: none;
}

.tab--panel-wrapper--active {
  display: block;
}
</style>
