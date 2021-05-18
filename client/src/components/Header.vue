<template>
    <nav class="tabs is-medium header-desktop">
        <ul class="is-justify-content-center is-align-items-baseline">
            <li :class="currentRoute == 'Resume' ? 'is-active' : ''">
                <router-link to="/resume">Создать резюме</router-link>
            </li>
            <li class="is-size-1 mx-6 has-text-link logo" @click="navigate('/')">
                Job Search
            </li>
            <li :class="currentRoute == 'Job' ? 'is-active' : ''">
                <router-link to="/job">Найти вакансию</router-link>
            </li>
        </ul>
    </nav>

    <nav class="header-mobile has-background-link-dark mb-5">
        <div class="is-flex p-2">
            <h2
                class="is-size-3 ml-5 has-text-white logo"
                @click="navigate('/')"
            >
                Job Search
            </h2>
            <a
                role="button"
                class="navbar-burger has-text-white"
                :class="{ 'is-active': dropdownOpened }"
                @click="dropdownOpened = !dropdownOpened"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div
            class="is-flex is-flex-direction-column header-dropdown"
            :class="{ opened: dropdownOpened }"
        >
            <h2
                :class="{ 'has-text-warning': currentRoute == 'Resume' }"
                class="is-clickable has-text-white pl-5 p-2 mb-2 is-size-4"
                @click="navigate('/resume')"
            >
                Создать резюме
            </h2>

            <h2
                :class="{ 'has-text-warning': currentRoute == 'Job' }"
                class="is-clickable has-text-white pl-5 p-2 is-size-4"
                @click="navigate('/job')"
            >
                Найти вакансию
            </h2>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            currentRoute: null,
            dropdownOpened: false,
        };
    },
    watch: {
        $route(to) {
            this.currentRoute = to.name;
        },
    },
    methods: {
        navigate(url) {
            this.dropdownOpened = false;
            this.$router.push(url);
        },
    },
};
</script>

<style>
.logo {
    cursor: pointer;
}
nav {
    overflow: visible !important;
}

.header-mobile {
    display: none;
    box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
}

@media (max-width: 750px) {
    .header-desktop {
        display: none !important;
    }

    .header-mobile {
        display: block;
    }
}

.header-dropdown {
    height: 0;
    transition: height 0.5s;
    overflow: hidden;
}
.header-dropdown.opened {
    height: 120px;
    box-sizing: content-box;
    transition: height 0.5s;
}
</style>