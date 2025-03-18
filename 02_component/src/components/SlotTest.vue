<template>
    <div>
        <!-- 슬롯 테스트 -->
        <!--
        <SlotItem v-for="item in items" :key="item.id"
            :id="item.id" :checked="item.checked" @item-change="itemChange">

            자식 컴포넌트의 <slot> 영역이 호출된다.
            <span v-if="item.checked" v-text="item.label"></span>
            <span v-else v-text="item.label" style="color: gray;"></span>

        </SlotItem>
        -->

        <!-- 명명된 슬롯 테스트 -->
        <SlotItem v-for="item in items" :key="item.id"
            :id="item.id" :checked="item.checked" @item-change="itemChange">

            <!-- 어떤 슬롯에 랜더링할 템플릿인지 이름으로 지정한다. -->
            <template v-slot:icon>
                <span v-if="item.checked" class="material-symbols-outrined">check</span>
                <span v-else class="material-symbols-outrined">close</span>
            </template>
            <template v-slot:label>
                <span v-if="item.checked" v-text="item.label"></span>
                <span v-else v-text="item.label" style="color: gray;"></span>
            </template>
        </SlotItem>
    </div>
</template>

<script>
    import SlotItem from './SlotItem.vue';

    export default {
        name: 'SlotTest',
        components: {
            SlotItem,
        },
        data() {
            return {
                items: [
                    {id: 'V', checked: true, label: 'Vue'},
                    {id: 'A', checked: false, label: 'Angular'},
                    {id: 'R', checked: false, label: 'React'}
                ]
            }
        },
        methods: {
            itemChange(data) {
                console.log(data);
                const item = this.items.find((item) => item.id === data.id);

                item.checked = data.checked;
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>