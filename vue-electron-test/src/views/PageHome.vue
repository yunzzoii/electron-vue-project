<!-- PageHome.vue -->
<template>
  <div class="home">
    <p>home 페이지입니다</p>
    <div class="layout">
      <ScriptTranslator :on-translate-click="setRawHtml"/>
      <ScriptResult :raw-html="rawHtml" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ScriptTranslator from '@/components/home/ScriptTranslator.vue'
import ScriptResult from '@/components/home/ScriptResult.vue'

export default {
  name: 'PageHome',
  components: {
    ScriptTranslator,
    ScriptResult
  },
  data() {
    return {
      rawHtml:''
    }
  },
  methods: {
    setRawHtml(value) {
      this.rawHtml = value
    }
  }
}
</script>


<style>
.home {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.layout {
  display: flex;
  width: 800px;
  gap: 24px;
}
</style>