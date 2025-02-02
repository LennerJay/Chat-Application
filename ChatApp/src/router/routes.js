import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import step1View from '../views/step1View.vue'
const routes = [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },    
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
        },

        {
            path: '/test',
            name: 'Test',
            component: TestView,
        }
    
    ]


export default routes