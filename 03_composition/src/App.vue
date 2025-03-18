<template>
  <div>
    <h2>Composition API</h2>
    <h3>1. 반응성을 가진 상태 데이터</h3>

    <Calc1 />

    <h3>2. 계산된 속성</h3>

    <Calc2 />

    <h3>3. 관찰 속성</h3>

    <!-- <Calc3 />     -->
    <Calc4 />
    
    <h4>&lt;script setup&gt; 사용하기</h4>
    <p>
      &lt;script setup&gt; 은 Composition API을 사용할 수 있는 더 편리한
      보편적 기능을 제공한다
    </p>
    
    <p>
      number : {{ number }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Calc1 from './components/Calc1.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';

// 최상위의 변수, 함수는 직접 템플릿에서 사용할 수 있다.
const number = ref(10);
const sqrt = () => {
  number.value = number.value * number.value;
}
</script>
<!-- <script>
import Calc1 from './components/Calc1.vue';
import Calc2 from './components/Calc2.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';

export default {
  setup () {
    

    return {}
  },
  components: {
    Calc1,
    Calc2,
    Calc3,
    Calc4
  }
}
</script> -->