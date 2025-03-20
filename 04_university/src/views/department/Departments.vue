<template>
    <main>
        <DepartmentTable :departments="departments"/>
        <Pagination :pageInfo="pageInfo"/>
    </main>
</template>

<script setup>
    import apiClient from '@/api';
    import { onMounted, reactive, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import DepartmentTable from '@/components/tables/DepartmentTable.vue';
    import Pagination from '@/components/common/Pagination.vue';

    const departments = ref([]);
    const currentRoute = useRoute();

    const pageInfo = reactive({
    // 값을 정수로 변환하고 실패하면 1을 기본값으로 사용
        currentPage: parseInt(currentRoute.query.page) || 1,
        totalCount: 0, // 전체 데이터 수
        pageLimit: 5, // pagination에 보이는 페이지의 수
        listLimit: 0 // 한 페이지에 표시될 리스트의 수
    });

    // axios 사용법
    // const fetchDepartments = (page) => {
    //     apiClient.get(`/api/v1/university-service/departments?page=${page}&numOfRows=10`)
    //     // 비동기 통신이 성공적으로 완료되었을 때 호출되는 함수를 지정한다.
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     // 비동기 통신이 실패했을 때 호출되는 함수를 지정한다.
    //     .catch((response) => {
    //         console.log(response);
    //     });
    // }

    // async / await 사용
    //  - 자바스크립트에서 비동기 작업을 효과적으로 처리할 수 있다.
    //  - 직접 axios를 사용할 때와 비교해 예외 처리가 간결해진다.
    // async는 비동기 작업을 포함하는 함수의 앞부분에 작성한다.
    // await는 async 함수 내에서만 작성할 수 있고 비동기 작업의 완료를 기다린다.
    const fetchDepartments = async (page) => {
        try{
            const response = await apiClient.get(`/api/v1/university-service/departments?page=${page}&numOfRows=10`)

            console.log(response);

            departments.value = response.data.items;
            pageInfo.totalCount = response.data.totalCount;
            pageInfo.listLimit = 10;

        } catch(error) {
            
            console.log(error);
        }
    }

    onMounted(() => {
        fetchDepartments(pageInfo.currentPage);
    });
</script>

<style scoped>

</style>