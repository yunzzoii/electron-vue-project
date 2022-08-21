<!-- ScriptTranslator.vue -->
<template>
    <div class="after">
        <p>
          <textarea v-html="message"></textarea>
          <button id="copy_btn" type="copy" @click="copy">코드복사하기</button>
        </p>
    </div>
</template>

<script>
//import test from "@/assets/test.txt";

export default {
  data(){
    return {
      message: '<font color="blue">html</font>'
    }
  },
}
</script>

<style scoped>
h1 {
    margin: 20px 20px;
}
textarea {
    width: 80%;
    height: 100px;
      }
#paste_btn {
    width: 100px;
    height: 50px;
    margin-right: -3px;
    background-color: rgb(45, 72, 244);
    color: white;
}
</style>