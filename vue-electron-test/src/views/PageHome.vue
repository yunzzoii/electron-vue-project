<!-- PageHome.vue -->
<template>
  <div class="home">
  <p>home 페이지입니다</p>
  <ScriptTranslator/>
  <ScriptResult/>
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
  }
}
</script>