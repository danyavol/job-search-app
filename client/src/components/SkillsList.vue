<template>
    <label class="label">Навыки</label>

    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input" type="text" v-on:keydown.enter="addSkill" v-model="currentValue" placeholder="Навык" />
        </div>
        <div class="control">
            <button class="button is-primary" @click="addSkill" :disabled="!isValid">Добавить</button>
        </div>
    </div>
    
    <div v-if="skills.length" class="skills-list is-flex is-flex-wrap-wrap mb-3">
        <div class="is-flex skill-item has-background-link-light" v-for="skill in skills" :key="skill.id">
            <strong>{{ skill.value }}</strong>
            <div class="removeSkill">
                <span class="icon has-text-danger" @click="() => removeSkill(skill.id)">
                    <font-awesome-icon :icon="IconBackspace" />
                </span>
            </div>
        </div>
    </div>
    <div v-else class="has-text-centered is-italic mb-3">Вы не добавили ни одного навыка</div>
</template>

<script>
import { faBackspace } from '@fortawesome/free-solid-svg-icons'

export default {
    data() {
        return {
            IconBackspace: faBackspace,
            isValid: true,
            currentValue: '',
            skills: [
                {id: 1, value: 'HTML5'}, {id: 2, value: 'CSS3'}, {id: 3, value: 'JavaScript'},
                {id: 4, value: 'Vue 3'}, {id: 5, value: 'Angular'}
            ],
            skillsCounter: 0
        }
    },
    created() {
        this.checkIsValid();
        this.$emit('skillsUpdate', this.skills);
    },
    emits: ['skillsUpdate'],
    methods: {
        addSkill() {
            if (!this.checkIsValid()) return;
            
            this.skills.push({
                id: ++this.skillsCounter,
                value: this.currentValue
            });

            this.currentValue = '';
            
            this.$emit('skillsUpdate', this.skills);
        },
        checkIsValid() {
            if (this.currentValue) this.isValid = true;
            else this.isValid = false;

            return this.isValid;
        },
        removeSkill(id) {
            let index = this.skills.findIndex(c => c.id === id);
            this.skills.splice(index, 1);
            this.$emit('skillsUpdate', this.skills);
        }
    },
    watch: {
        currentValue() {
            this.checkIsValid();
        }
    }
}
</script>

<style>
.removeSkill {
    margin-left: 5px;
}
.removeSkill > span {
    cursor: pointer;
}
.skills-list {
    gap: 10px;
}
.skill-item {
    border-radius: 15px;
    padding: 0 10px 0 15px;
}
</style>