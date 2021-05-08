<template>
    <div class="container h-100" v-if="data">


        <section v-if="pageType == 'default'" class="h-100">
            default
        </section>


        <section v-if="pageType == 'search'" class="h-100 is-flex is-flex-direction-column">
            <div class="jobs-list is-flex-grow-1">
                <div v-if="!loading">
                    <JobItem v-for="job in data.jobs" :key="job.url" :job="job" />
                    <!-- {{data.jobs}} -->
                </div>
            </div>
            <Pagination
                class="is-flex is-justify-content-center"
                :total="data.total"
                :take="data.query.take"
                :currentPage="data.query.page"
                @pageChange="onPageChange"
            />
        </section>


    </div>
</template>

<script>
import axios from "axios";
import Pagination from "@/components/Pagination";
import JobItem from '@/components/JobItem';

export default {
    components: {
        Pagination,
        JobItem
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
                const newQuery = this.updateQuery({ page });
                this.updateJobs(newQuery);
            }
        },
        updateQuery(newQuery) {
            const updatedQuery = Object.assign({}, this.$route.query, newQuery);
            this.$router.push({ query: updatedQuery });
            this.$route.query = updatedQuery;
            return updatedQuery;
        },
        updateJobs(query) {
            this.loading = true;
            axios.get(process.env.VUE_APP_SERVER_PATH + "/job", {params: query})
                .then(response => {
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
</style>