<template>
    <div>
        <label for="number">숫자 : </label>
        <input type="number" id="number" v-model.number="state.number">

        <p>
            <!-- 결과 : {{ result }} -->
            결과 : {{ state.result }}
        </p>
    </div>
</template>

<script>
import { ref, watch, reactive } from 'vue';

export default {
    setup () {
        // const number = ref(0);
        // const result = ref(0);
        const state = reactive({number: 0, result: 0});

        // watch(number, (newNumber, oldNumber) => {
        //     console.log(`${oldNumber} => ${newNumber}`);

        //     result.value = newNumber * newNumber;
        // });

        // 감시 대상이 반응성을 가진 데이터가 아니라 에러를 발생한다.
        // watch(number, (newNumber, oldNumber) => {
        watch(() => state.number, (newValue, oldValue) => {
            console.log(`${newValue} => ${oldValue}`);

            state.result = newValue * newValue;
        });

        return {state}
    }
}
</script>