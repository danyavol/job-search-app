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
                        v-model="resumeData.firstName"
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
                        v-model="resumeData.lastName"
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
                    v-model="resumeData.profession"
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
                    v-model="resumeData.aboutMe"
                ></textarea>
            </div>
        </div>
        <!-- Контакты -->
        <ContactsList @contactsUpdate="onContactsUpdate" />

        <!-- Отправить форму -->
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" @click="downloadResume">Создать резюме</button>
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
import axios from 'axios'

export default {
    components: {
        ContactsList
    },
    data() {
        return {
            resumeData: {
                firstName: '',
                lastName: '',
                profession: '',
                aboutMe: '',
                contacts: []
            }
        }
    },
    methods: {
        downloadResume() {
            axios.post('http://localhost:5000/create-pdf', this.resumeData, {responseType: 'blob'})
                .then(result => {
                    const url = window.URL.createObjectURL(new Blob([result.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'file.pdf');
                    document.body.appendChild(link);
                    link.click();
                })
                .catch(err => console.log(err));
        },
        onContactsUpdate(contacts) {
            this.resumeData.contacts = contacts;
        }
    }
}
</script>