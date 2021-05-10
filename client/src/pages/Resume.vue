<template>
    <div class="container">
        <div class="mx-4">
            <p
                v-if="!loading && error"
                class="has-text-centered has-text-danger has-text-weight-medium is-italic mb-5"
            >
                {{ error }}
            </p>

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

            <!-- Навыки -->
            <SkillsList @skillsUpdate="onSkillsUpdate" />

            <!-- Контакты -->
            <ContactsList @contactsUpdate="onContactsUpdate" />

            <!-- Отправить форму -->
            <div class="field is-grouped">
                <div class="control">
                    <button
                        class="button is-link"
                        :class="{ 'is-loading': loading }"
                        @click="downloadResume"
                        :disabled="loading"
                    >
                        Создать резюме
                    </button>
                </div>
            </div>

            <!-- Языки -->
            <!-- Опыт работы -->
            <!-- Образование -->
        </div>
    </div>
</template>

<script>
import ContactsList from "@/components/ContactsList";
import SkillsList from "@/components/SkillsList";
import axios from "axios";

export default {
    components: {
        ContactsList,
        SkillsList,
    },
    data() {
        return {
            resumeData: {
                firstName: "Иван",
                lastName: "Иванов",
                profession: "Frontend developer",
                aboutMe:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi erat. Donec volutpat augue non est egestas, ut dapibus diam ultrices. Vivamus bibendum blandit orci, nec porta lacus rhoncus quis. Donec fermentum, enim tincidunt volutpat pharetra, nulla erat efficitur lacus, ac malesuada odio quam in velit. In quis fringilla sem, et porta nunc.",
                contacts: [],
                skills: [],
            },
            loading: false,
            error: null,
        };
    },
    methods: {
        downloadResume() {
            this.loading = true;
            axios
                .post(
                    process.env.VUE_APP_SERVER_PATH + "/create-pdf",
                    this.resumeData,
                    { responseType: "blob" }
                )
                .then((result) => {
                    this.error = null;
                    const url = window.URL.createObjectURL(
                        new Blob([result.data])
                    );
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "file.pdf");
                    document.body.appendChild(link);
                    link.click();
                })
                .catch(
                    () =>
                        (this.error =
                            "Ошибка соединения с сервером, попробуйте позже!")
                )
                .finally(() => (this.loading = false));
        },
        onContactsUpdate(contacts) {
            this.resumeData.contacts = contacts;
        },
        onSkillsUpdate(skills) {
            this.resumeData.skills = skills;
        },
    },
};
</script>