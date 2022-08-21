<!-- ScriptTranslator.vue -->
<template>
    <div class="before">
        <textarea placeholder="번역할 내용을 입력하세요." v-model="userInput"></textarea>
        <div class="buttonWrapper">
            <div></div>
            <div>
                <button id="reset_btn" type="reset" @click="clearUserInput">초기화</button>
                <button id="submit_btn" @click="handleTranslateClick">번역하기</button>
            </div>
        </div>
    </div>
</template>



<script>
import { fetchTranslated } from '@/api/mock';

export default {
    name: 'BeforeConv',
    props:['onTranslateClick'],
    data: function () {
        return {
            userInput: ''
        }
    },
    methods: {
        handleTranslateClick() {
            fetchTranslated(this.userInput).then(html => {
                this.$props.onTranslateClick(html)
            }) 
        },
        clearUserInput() {
            this.userInput = '';
        }
    }
}
</script>

<style scoped>
.before {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.buttonWrapper {
    display: flex;
    justify-content: space-between;
}

h1 {
    margin: 20px 20px;
}

textarea {
    height: 100px;
}

button {
    font-weight: bold;
}

#reset_btn {
    background-color: rgb(160, 236, 155);
    color: white;

}

#submit_btn {
    background-color: rgb(157, 188, 245);
    color: white;
}
</style>