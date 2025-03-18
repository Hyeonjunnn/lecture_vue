<template>
    <li>
        <label>
            <!-- <input type="checkbox" :checked="checked"> {{ no }} - {{ name }} -->
            <!-- <input type="checkbox" :checked="student.checked"> {{ student.no }} - {{ student.name }} -->
            <input type="checkbox" :checked="student.checked"
            @change="$emit('item-change', { no: student.no, checked: $event.target.checked })" >{{ student.no }} - {{ student.name }}
        </label>
    </li>
</template>

<script>
import Student from '@/Student';

    export default {
        name: 'CheckboxItem',
        emits: ['item-change'],
        // props 옵션으로 전달받을 속성을 정의한다.
        // props: ['no', 'name', 'checked'],
        // 속성의 유효성 체크
        // props: {
            // no: String,
            // name: {
            //     validator(value) {
            //         // name이 문자열이면서 2글자 이상인지 체크
            //         return typeof(value) !== 'string' ? false :
            //             value.length >= 2 ? true : false;
            //     }
            // },
            // checked: {
            //     type: Boolean,
            //     required: false,
            //     default: false
            // }
        // }
        props: ['student'],
        // props: {
        //     student: Student
        // }
        created () {
            // props에 등록된 속성을 변경하려고 하면 에러가 발생한다.
            // this.checked = true;
            // 객체로 전달받으면 객체의 내부 속성을 변경할 수 있지만 변경하지 않도록 해야 한다.
            // this.student.checked = true;
        },
    }
</script>