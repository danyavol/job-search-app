<template>
    <Header />
    <main>
        <router-view />
    </main>
    <Footer />
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
    name: "App",
    components: { Header, Footer },
};
</script>

<style>
#app, body, html {
    height: 100%;
}
#app {
    display: flex;
    flex-direction: column;
}
main {
    flex-grow: 1;
    margin-bottom: 1.5rem;
}
</style>
