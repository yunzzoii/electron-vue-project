<!-- ScriptResult.vue -->
<template>
  <div class="after">
    <div class="box">
      <div v-html="rawHtml"></div>
    </div>
    <div class="buttonWrapper">
      <div></div>
      <button id="copy_btn" type="button" @click="handleCopyButtonClick">
        코드복사하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rawHtml"],
  methods: {
    handleCopyButtonClick: function () {
      this.$copyText(this.$props.rawHtml).then(() => alert("copied"));
    },
  },
};
</script>

<style scoped>
.after {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.box {
  padding: 12px;
  height: 100px;
  width: 100%;
  border: solid 1px grey;
  border-radius: 5px;
}

.buttonWrapper {
    display: flex;
    justify-content: flex-end;
}

h1 {
  margin: 20px 20px;
}

textarea {
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
