<template>
    <nav class="pagination is-rounded is-flex is-justify-content-center" role="navigation" aria-label="pagination">
        <!-- все страницы помещаются разом -->
        <div v-if="pageCount <= 7">
            <ul class="pagination-list" >
                <li v-for="pageNumber in pageCount" :key="pageNumber" @click="changePage(pageNumber-1)">
                    <a class="pagination-link" :class="{'is-current': pageNumber == currentPage+1}">{{ pageNumber }}</a>
                </li>
            </ul>
        </div>
        <!-- все страницы не помещаются -->
        <div v-if="pageCount > 7" >
            <!-- без точек в начале -->
            <ul class="pagination-list" v-if="currentPage <= 2">
                <li v-for="pageNumber in 3" :key="pageNumber" @click="changePage(pageNumber-1)">
                    <a class="pagination-link" :class="{'is-current': pageNumber == currentPage+1}">{{ pageNumber }}</a>
                </li>
                <li v-if="currentPage == 2" @click="changePage(3)"><a class="pagination-link">4</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li @click="changePage(pageCount-1)"><a class="pagination-link">{{ pageCount }}</a></li>
            </ul>
            <!-- без точек в конце -->
            <ul class="pagination-list" v-else-if="pageCount - currentPage <= 3">
                <li @click="changePage(0)"><a class="pagination-link">1</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li v-if="pageCount - currentPage == 3" @click="changePage(pageCount-4)"><a class="pagination-link">{{ pageCount - 3 }}</a></li>
                <li v-for="pageNumber in 3" :key="pageNumber" @click="changePage(pageCount - (4-pageNumber))">
                    <a class="pagination-link" :class="{'is-current': pageCount - (4-pageNumber) == currentPage}">{{ pageCount - (4-pageNumber) + 1 }}</a>
                </li>
            </ul>
            <!-- с точками с двух сторон -->
            <ul class="pagination-list" v-else>
                <li @click="changePage(0)"><a class="pagination-link">1</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li @click="changePage(currentPage-1)"><a class="pagination-link">{{ currentPage }}</a></li>
                <li @click="changePage(currentPage)"><a class="pagination-link is-current">{{ currentPage + 1 }}</a></li>
                <li @click="changePage(currentPage+1)"><a class="pagination-link">{{ currentPage + 2 }}</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li @click="changePage(pageCount-1)"><a class="pagination-link">{{ pageCount }}</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        pageCount: Number,
        take: Number,
        currentPage: Number,
        loading: Boolean
    },
    emits: ['pageChange'],
    methods: {
        changePage(page) {
            if (!this.loading) this.$emit('pageChange', page);
        }
    },
    watch: {
    }
};
</script>