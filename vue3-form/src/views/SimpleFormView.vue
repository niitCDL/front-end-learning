<script setup>
import BaseInput from '../components/form/BaseInput.vue';
import BaseSelect from '../components/form/BaseSelect.vue';
import BaseCheckbox from '../components/form/BaseCheckbox.vue';
import BaseRadio from '../components/form/BaseRadio.vue';
import { reactive } from 'vue';

const categories = reactive([
    'sustainability',
    'nature',
    'animal welfare',
    'housing',
    'education',
    'food',
    'community'
])

const event = reactive({
    category: '',
    title: '',
    pets: 1,
    extras: {
        coding: false,
        music: false
    }
})

const petOptions = reactive([{
    label: 'Yes', value: 1
}, 
{
    label: 'No', value: 0
}])

</script>

<template>
    <div class="m-3 p-3 text-cyan-500">
        <h1 class="text-2xl font-bold my-2">Create an event</h1>
        <form @submit.prevent="sendForm">
            <BaseSelect :options="categories" v-model="event.category" label="Select a category"></BaseSelect>

            <BaseInput v-model="event.title" label="Title" type="text"></BaseInput>

            <h3>Extras</h3>
            <div>
                <BaseCheckbox v-model="event.extras.coding" label="Coding"/>
            </div>
            <div>
                <BaseCheckbox v-model="event.extras.music" label="Live music"/>
            </div>

            <h3>Are pets allowed?</h3>
            <div>
                <BaseRadio v-model="event.pets" :value="1" label="Yes" name="pets"/>
            </div>
            <div>
                <BaseRadio v-model="event.pets" :value="0" label="No" name="pets"/>
            </div>
            <button type="submit" class="px-12 py-2 bg-cyan-600 text-white rounded-3xl my-2">Submit</button>
        </form>

        <pre>{{ event }}</pre>
    </div>
</template>



<style scoped></style>