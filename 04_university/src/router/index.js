import AuthLayout from '@/layout/AuthLayout.vue'
import BaseLayout from '@/layout/BaseLayout.vue'
import NotFound from '@/views/common/NotFound.vue'
import AddDepartment from '@/views/department/AddDepartment.vue'
import DepartmentDetail from '@/views/department/DepartmentDetail.vue'
import Departments from '@/views/department/Departments.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  // 라우터가 사용할 라우팅 모드 지정 (HTML 5 모드)
  history: createWebHistory(import.meta.env.BASE_URL),
  // 요청 경로에 따라 렌더링 할 컴포넌트 배열로 지정
  // 명명된 라우트
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home
  //   },
  //   {
  //     path: '/departments',
  //     name: 'departments',
  //     component: Departments
  //   },
  //   // 동적 라우트는 일정한 패턴의 URI 경로를 하나의 라우트에 연결하는 방법이다.
  //   {
  //     path: '/departments/:no',
  //     name: 'departments/no',
  //     component: DepartmentDetail
  //   },
  //   {
  //     path: '/departments/add',
  //     name: 'departments/add',
  //     component: AddDepartment
  //   },
  //   // 404 라우트
  //   {
  //     path: '/:paths(.*)*',
  //     name: 'notfound',
  //     component: NotFound
  //   }
  // ],


  // 중첩된 라우트
  // RouterView에 의해서 랜더링된 컴포넌트가 다시 RouterView를 이용해 자식 라우트에 매칭된 컴포넌트를 랜더링한다.
  routes: [
    {
      path: '/',
      name: 'base',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'departments',
          name: 'departments',
          component: Departments
        },
        // 동적 라우트는 일정한 패턴의 URI 경로를 하나의 라우트에 연결하는 방법이다.
        {
          path: 'departments/:no',
          name: 'departments/no',
          component: DepartmentDetail
        },
        {
          path: 'departments/add',
          name: 'departments/add',
          component: AddDepartment
        },
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
      }
      ]
    },
    // 404 라우트
    {
      path: '/:paths(.*)*',
      name: 'notfound',
      component: NotFound
    }

  ],
})

// 네비게이션 가드
//  - 라우팅이 일어날 때 프로그래밍 방식으로 네비게이션을 안전하게 보호하는 기능을 수행한다.
//  - 네비게이션 가드는 라우트하는 경로가 바뀔 때 반응한다.
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore;

  // 로그인 페이지가 아니고, 로그인 상태가 아니면 로그인 페이지로 리다이렉트한다.
  if (to.name !== 'login' && !authStore.isLoggedIn) {
    next({
      name: 'login'
    });
  } else {
    next();
  }
});

export default router
