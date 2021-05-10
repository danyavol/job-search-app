<template>
    <label class="label">Контакты</label>

    <div class="field has-addons is-hidden-mobile">
        <div class="control is-expanded">
            <input class="input" type="text" v-model="currentValue" placeholder="Контакт (Прим. 'my@email.com')" />
        </div>
        <div class="control is-expanded">
            <input class="input" type="text" v-model="currentTitle" placeholder="Название (Прим. 'Email')" />
        </div>
        <div class="control">
            <button class="button is-primary" @click="addContact" :disabled="!isValid">Добавить</button>
        </div>
    </div>

    <div class="is-hidden-tablet mb-2">
        <div class="control is-expanded">
            <input class="input" type="text" v-model="currentValue" placeholder="Контакт (Прим. 'my@email.com')" />
        </div>
        <div class="control is-expanded my-2">
            <input class="input" type="text" v-model="currentTitle" placeholder="Название (Прим. 'Email')" />
        </div>
        <div class="control">
            <button class="button is-fullwidth is-primary" @click="addContact" :disabled="!isValid">Добавить</button>
        </div>
    </div>
    
    <table v-if="contacts.length" class="table is-narrow is-hoverable is-fullwidth">
        <tbody>
            <tr class="contact-row" v-for="contact in contacts" :key="contact.id">
                <td>{{ contact.value }}</td>
                <td><strong>{{ contact.title }}</strong></td>
                <td class="removeContact">
                    <span class="icon has-text-danger" @click="() => removeContact(contact.id)">
                        <font-awesome-icon :icon="IconBackspace" />
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-else class="has-text-centered is-italic mb-3">Вы не добавили ни одного способа связаться с вами</div>
    
</template>

<script>
import { faBackspace } from '@fortawesome/free-solid-svg-icons'

export default {
    data() {
        return {
            IconBackspace: faBackspace,
            isValid: true,
            currentValue: '',
            currentTitle: '',
            contacts: [ 
                {id: 1, value: 'github.com/danyavol', title: 'GitHub'},
                {id: 2, value: 'daniil.volosyuk@gmail.com', title: 'Email'}
            ],
            contactsCounter: 0
        }
    },
    created() {
        this.checkIsValid();
        this.$emit('contactsUpdate', this.contacts);
    },
    emits: ['contactsUpdate'],
    methods: {
        addContact() {
            this.contacts.push({
                id: ++this.contactsCounter,
                value: this.currentValue,
                title: this.currentTitle
            });

            this.currentValue = '';
            this.currentTitle = '';

            this.$emit('contactsUpdate', this.contacts);
        },
        checkIsValid() {
            if (this.currentValue && this.currentTitle) this.isValid = true;
            else this.isValid = false;
        },
        removeContact(id) {
            let index = this.contacts.findIndex(c => c.id === id);
            this.contacts.splice(index, 1);
            this.$emit('contactsUpdate', this.contacts);
        }
    },
    watch: {
        currentValue() {
            this.checkIsValid();
        },
        currentTitle() {
            this.checkIsValid();
        }
    }
}
</script>

<style>
.removeContact {
    width: 100px;
}
.removeContact > span {
    cursor: pointer;
}
@media (max-width: 750px) {
    .removeContact {
        width: auto;
    }
}
</style>