<template>
    <div>
        <!--
        <label>
            <input type="checkbox" :value="id" :checked="checked"
                @change="$emit('item-change', {id, checked: $event.target.checked})">
            <slot></slot> 사이에는 부모 컴포넌트로부터 전달받는 템플릿이 없을 때 보여줄 UI를 작성한다.
            <slot>레이블 없음</slot>
        </label>
        -->
        <label>
            <slot name="icon"></slot>

            <input type="checkbox" :value="id" :checked="checked"
                @change="$emit('item-change', {id, checked: $event.target.checked})">
            <!-- <slot></slot> 사이에는 부모 컴포넌트로부터 전달받는 템플릿이 없을 때 보여줄 UI를 작성한다.  -->
            
            <slot name="label">레이블 없음</slot>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'SlotItem',
        props: ['id', 'checked'],
        emits: ['item-change']

    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

.material-symbols-outrined {
    font-size: 12px;
}
</style>