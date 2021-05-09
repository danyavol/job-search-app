<template>
    <div class="card">
        <div class="card-content">
            <div class="is-flex is-justify-content-space-between is-align-items-center">
                <a :href="job.url" target="_blank" class="has-text-primary is-size-5">{{ job.title }}</a>
                <p class="has-text-weight-bold">{{ job.salary }}</p>
            </div>
            <div class="is-flex is-justify-content-space-between mt-2">
                <div>
                    <div class="is-flex is-align-items-center">
                        <font-awesome-icon :icon="faBuilding" />
                        <a :href="job.employer" target="_blank" class="is-size-7 has-text-weight-medium has-text-grey ml-2">{{ job.company }}</a>
                    </div>
                    <p class="is-size-7 has-text-grey-light">{{ job.address }}</p>
                </div>
                <img v-if="job.employerLogo" :src="job.employerLogo" alt="employer logo" />
            </div>
            
            <hr class="mb-2 mt-3">
            <div>
                <p class="mb-1">{{ job.responsibility }}</p>
                <p>{{ job.requirement }}</p>
            </div>
            <div class="is-flex is-justify-content-flex-end has-text-grey-light mt-2">
                <p>{{ job.date }}</p>
            </div>
        </div>
    </div>
</template>

<script>
/*
job = {
    address: "Брест",
    company: " Sobaki Pavlova Limited Company",
    date: "2 мая",
    requirement: "This position is remote work and is open to anywhere in the world. You must be able to speak business...",
    responsibility: "Develop and implement front-end web code and design standards for writing clean, semantic code. Wireframe and mockup revamped or...",
    salary: "460-1 000 USD",
    title: "Web Developer/Веб разработчик",
    url: "https://hh.ru/vacancy/44335327?query=frontend"
}
*/

import { faBuilding } from '@fortawesome/free-regular-svg-icons'

export default {
    props: ['job'],
    data() {
        return {faBuilding};
    }
}
</script>

