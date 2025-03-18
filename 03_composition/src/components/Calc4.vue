<template>
    <div>
        <label for="number">숫자 : </label>
        <!-- <input type="number" id="number" v-model.number="number"> -->
        <input type="number" id="number" v-model.number="state.number">

        <p>
            결과 : {{ state.result }}
        </p>
    </div>
</template>

<script>
import { ref, watch, reactive, watchEffect } from 'vue';

export default {
    setup () {
        // const number = ref(0);
        // const result = ref(0);
        const state = reactive({number: 0, result: 0})

        // Vue3에서 반응성 데이터를 추적하는 기능을 제공하는 새로운 방법을 제공한다.
        watchEffect(() => {
            // result.value = number.value * 2;
            state.result = state.number * 2;
        });

        // return {number, result}
        return {state}
    }
}
</script>