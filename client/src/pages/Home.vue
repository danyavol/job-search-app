<template>
    <section class="hero is-medium is-priamry">
        <div class="hero-body">
            <h2 class="title is-size-1 has-text-centered has-text-weight-light">
                Простое и эффективное приложение для поиска работы
            </h2>
        </div>
    </section>
    <section class="hero is-medium is-link">
        <div class="hero-body">
            <p class="title">Создай резюме</p>
            <p class="subtitle">Заполни простую форму, чтобы автоматически
            сгенерировать резюме в формате PDF.</p>
        </div>
    </section>
    <section class="hero is-medium is-info">
        <div class="hero-body">
            <p class="title">Найди вакансию</p>
            <p class="subtitle">Подберите себе вакансию с помощью поиска. Нужно всего лишь выбрать подходящую вакансию и отправить
            работодателю ранее сгенерированное резюме.</p>
        </div>
    </section>
    
    <section class="mt-6 mb-5 nav-butt">
        <router-link to="/resume"><button class="button is-primary is-outlined is-large">Создать резюме</button></router-link>
        <router-link to="/job"><button class="button is-info is-outlined is-large">Найти вакансию</button></router-link>
    </section>
    
</template>

<style>
    .nav-butt {
        display: flex;
        justify-content: space-around;
    }

    @media (max-height: 750px) {
        .nav-butt {
            align-items: center;
            gap: 30px;
            flex-direction: column;
        }
    }
</style>