<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="bootstrap" viewBox="0 0 118 94">
            <title>Bootstrap</title>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
        </symbol>
    </svg>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
            <span class="fs-4">University</span>
        </a>

        <ul class="nav nav-pills">
            <li class="nav-item">
                
                <!-- 화면 전환에 필요한 링크를 생성한다. -->
                <!-- 
                    명명된 라우터의 경우 v-bind를 이용해서 to 속성에 문자열이 아닌 객체를 바인딩해야한다.
                -->
                <!-- <RouterLink :to="{ name: 'home'}">HOME</RouterLink> -->
                <RouterLink :to="{ name: 'home'}" class="nav-link">HOME</RouterLink>
            </li>
            <li class="nav-item">
                <!-- <RouterLink to="/departments">학과 목록 조회</RouterLink> -->
                <RouterLink :to="{ name: 'departments'}" class="nav-link">학과 목록 조회</RouterLink>
            </li>
            <li class="nav-item">
                <!-- <RouterLink to="/departments/1">학과 상세 조회</RouterLink> -->
                <RouterLink :to="{ name: 'departments/no', params: {no: '033'}}" class="nav-link">학과 상세 조회(테스트)</RouterLink>
            </li>
            <li class="nav-item">
                <!-- <RouterLink to="/departments/add">학과 추가</RouterLink> -->
                <RouterLink :to="{ name: 'departments/add'}" class="nav-link">학과 추가</RouterLink>
            </li>
        </ul>
        <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-secondary" @click="logout">Logout</button>
        </div>
    </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';

    const logout =() => {
        if (confirm('정말로 로그아웃 하시겠습니까?')) {
            const authStore = useAuthStore();

            authStore.logout();
        }

    };

</script>

<style scoped>
    /* 현재 URL과 정확하게 일치하는 경우에만 스타일이 적용된다.  */
    .router-link-exact-active {
        color: rgb(108, 117, 125);

    }
</style>