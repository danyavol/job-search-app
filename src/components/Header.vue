<template>
    <nav class="tabs is-medium">
        <ul class="is-justify-content-center is-align-items-baseline">
            <li :class="currentRoute == 'Job' ? 'is-active' : ''">
                <router-link to="/job">Найти вакансию</router-link>
            </li>
            <li class="is-size-1 mx-6" @click="goHome">Job Search</li>
            <li :class="currentRoute == 'Resume' ? 'is-active' : ''">
                <router-link to="/resume">Создать резюме</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            currentRoute: null,
        };
    },
    watch: {
        $route(to) {
            this.currentRoute = to.name;
        },
    },
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
};
</script>