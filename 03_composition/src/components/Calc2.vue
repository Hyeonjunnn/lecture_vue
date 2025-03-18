<template>
    <div>

        <label for="num1">첫 번째 수 : </label>
        <input type="number" id="num1" v-model.number="state.num1">

        <br><br>

        <label for="num2">두 번째 수 : </label>
        <input type="number" id="num2" v-model.number="state.num2">

        <br><br>

        <p>
            결과 : {{ result }}
        </p>
    </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
    setup () {
        const state = reactive({num1: 10, num2: 20});
        // const result = computed(() => {
        //     return state.num1 + state.num2;
        // });
        const result = computed(() => state.num1 + state.num2);

        // setup() 내부에서 계산된 속성에 접근할 때는 value 속성을 사용해야 한다.
        console.log(result.value);

        return {state, result}
    }
}
</script>

<style lang="scss" scoped>

</style>