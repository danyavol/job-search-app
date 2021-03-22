<template>
    <div class="container">
        <!-- Имя и фамилия -->
        <div class="field-body field">
            <div class="field">
                <label class="label">Имя</label>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        placeholder="Введите имя"
                    />
                </div>
            </div>

            <div class="field">
                <label class="label">Фамилия</label>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        placeholder="Введите фамилию"
                    />
                </div>
            </div>
        </div>
        <!-- Желаемая должность -->
        <div class="field">
            <label class="label">Должность</label>
            <div class="control">
                <input
                    class="input"
                    type="text"
                    placeholder="Введите желаемую должность"
                />
            </div>
        </div>
        <!-- О себе -->
        <div class="field">
            <label class="label">О себе</label>
            <div class="control">
                <textarea
                    class="textarea"
                    placeholder="Кратко опишите себя, свои сильные и слабы стороны, пожелания о работе"
                ></textarea>
            </div>
        </div>
        <!-- Контакты -->
        <ContactsList />

        <!-- Отправить форму -->
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Создать резюме</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Отмена</button>
            </div>
        </div>
        
        <!-- Навыки и уровент знания -->
        <!-- Языки -->
        <!-- Опыт работы -->
        <!-- Образование -->
    </div>
</template>

<script>
import ContactsList from '@/components/ContactsList'

export default {
    components: {
        ContactsList
    }
}
</script>