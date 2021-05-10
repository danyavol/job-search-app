<template>
    <div class="on-desktop field has-addons">
        <div class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Введите вакансию" v-model="text" :disabled="loading" v-on:keydown.enter="search()" />
            <span class="icon is-small is-left">
                <font-awesome-icon :icon="faSearch" />
            </span>
        </div>
        <div class="control has-icons-left">
            <span class="select">
                <select v-model="region" :disabled="loading">
                    <option v-for="(region, key) in regions" :key="key" :value="key">{{region}}</option>
                </select>
            </span>
            <span class="icon is-small is-left">
                <font-awesome-icon :icon="faGlobe" />
            </span>
        </div>
        <div class="control">
            <button class="button is-primary" :class="{'is-loading': loading}" @click="search()" :disabled="!text.length || loading"> Найти </button>
        </div>
    </div>

    <div class="on-mobile field">
        <div class="control is-fullwidth has-icons-left">
            <input class="input" type="text" placeholder="Введите вакансию" v-model="text" :disabled="loading" v-on:keydown.enter="search()" />
            <span class="icon is-small is-left">
                <font-awesome-icon :icon="faSearch" />
            </span>
        </div>
        <div class="control has-icons-left my-2">
            <span class="select is-fullwidth">
                <select v-model="region" :disabled="loading">
                    <option v-for="(region, key) in regions" :key="key" :value="key">{{region}}</option>
                </select>
            </span>
            <span class="icon is-small is-left">
                <font-awesome-icon :icon="faGlobe" />
            </span>
        </div>
        <div class="control">
            <button class="button is-primary is-fullwidth" :class="{'is-loading': loading}" @click="search()" :disabled="!text.length || loading"> Найти </button>
        </div>
    </div>
</template>

<script>
import { faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
    props: ['loading'],
    emits: ['searchUpdate'],
    data() {
        return {
            faGlobe,
            faSearch,
            regions: {
                Minsk: 'Минск',
                Brest: 'Брест',
                Vitebsk: 'Витебск',
                Gomel: 'Гомель',
                Grodno: 'Гродно',
                Mogilev: 'Могилев',
            },
            text: '',
            region: 'Minsk'
        };
    },
    created() {
        const q = this.$route.query;
        if (q.text) this.text = q.text;
        if (q.region && this.regions[q.region] != null) this.region = q.region;
    },
    methods: {
        search() {
            const {text, region} = this;
            if (!text.length) return;

            console.log({text, region});
            this.$emit('searchUpdate', {text, region})
        }
    }
};
</script>

<style>
    .on-mobile {
        display: none !important;
    }

    @media (max-width: 750px) {
        .on-desktop {
            display: none !important;
        }
        .on-mobile {
            display: block !important;
        }
    }
</style>