<template>
    <div class="before">
        <h1>대직원챗봇</h1>
        <p>
        <textarea placeholder="번역할 내용을 입력하세요." v-model="userInput"></textarea>
        <button id="reset_btn" type="reset" @click="clearUserInput">초기화</button>
        <button id="submit_btn" type="submit">번역하기</button>
        <p>
    </div>
</template>

<script>
export default {
    name: 'BeforeConv',
    data: function() {
        return {
            userInput : ''
        }
    },
    methods: {
        clearUserInput() {
            this.userInput = '';
        }
    }
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
#reset_btn {
    width: 100px;
    height: 50px;
    margin-right: -3px;
    background-color: rgb(32, 196, 244);
    color: white;
}
#submit_btn {
    width: 100px;
    height: 50px;
    margin-left: -3px;
    background-color: mediumspringgreen;
    color: white;
}
</style>
