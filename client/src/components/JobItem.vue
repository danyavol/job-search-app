<template>
    <div>
        <p>{{job.title}}</p>
        <p>{{job.company}}</p>
        <p>{{job.url}}</p>
        <hr>
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
export default {
    props: ['job']
}
</script>

