<template>
    <div class="container h-100 is-flex is-flex-direction-column">
        <SearchPanel @searchUpdate="onSearchUpdate" :loading="loading" />

        <!-- Секция вакансий -->
        <section
            v-if="data && data.jobs.length"
            class="is-flex-grow-1 is-flex is-flex-direction-column"
        >   
            <Pagination
                class="mt-2"
                :pageCount="data.totalPages"
                :take="data.query.take"
                :currentPage="data.query.page"
                :loading="loading"
                @pageChange="onPageChange"
            />
            <div class="jobs-list is-flex-grow-1">
                <div v-if="!loading" class="jobs-wrapper is-flex is-flex-direction-column my-5">
                    <JobItem
                        v-for="job in data.jobs"
                        :key="job.url"
                        :job="job"
                    /> 
                </div>
                <div v-else class="h-100 is-flex is-justify-content-center is-align-items-center">
                    <div class="loader is-loading"></div>    
                </div>       
            </div>
            <Pagination
                :pageCount="data.totalPages"
                :take="data.query.take"
                :currentPage="data.query.page"
                :loading="loading"
                @pageChange="onPageChange"
            />
        </section>

        <!-- Секция исключительных ситуаций -->
        <section v-if="!loading">
            <p v-if="!data" class="has-text-centered has-text-grey-light is-italic mt-5">
                Заполните параметры поиска и нажмите
                <strong class="has-text-grey">Найти</strong>,
                чтобы подобрать вакансию
            </p>

            <p v-else-if="!data.jobs.length" class="has-text-centered has-text-grey-light is-italic mt-5">
                Ничего не найдено по вашему запросу
            </p>
        </section>

        

    </div>
</template>

<script>
import axios from "axios";
import Pagination from "@/components/Pagination";
import JobItem from "@/components/JobItem";
import SearchPanel from "@/components/SearchPanel";

export default {
    components: {
        Pagination,
        JobItem,
        SearchPanel,
    },
    data() {
        return {
            pageType: "default",
            loading: false,
            data: null,
        };
    },
    created() {
        if (this.$route.query.text) this.pageType = "search";

        if (this.pageType == "search") {
            this.updateJobs(this.$route.query);
        }
    },
    methods: {
        onPageChange(page) {
            if (page != this.data.query.page) {
                const updatedQuery = this.updateQuery({ page });
                this.updateJobs(updatedQuery);
            }
        },
        onSearchUpdate(query) {
            query.page = 0;
            const updatedQuery = this.updateQuery(query);
            this.updateJobs(updatedQuery);
        },
        updateQuery(newQuery) {
            const updatedQuery = Object.assign({}, this.$route.query, newQuery);
            this.$router.push({ query: updatedQuery });
            this.$route.query = updatedQuery;
            return updatedQuery;
        },
        updateJobs(query) {
            this.loading = true;
            axios
                .get(process.env.VUE_APP_SERVER_PATH + "/job", {
                    params: query,
                })
                .then((response) => {
                    this.data = response.data;
                    this.updateQuery(response.data.query);
                    this.loading = false;

                    console.log(response.data);
                });
        },
    },
};
</script>

<style>
.h-100 {
    height: 100%;
}

.loader {
    width: 80px;
    height: 80px;
}

.jobs-wrapper {
    gap: 10px;
}
</style>