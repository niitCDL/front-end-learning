<script setup>
import docs from '@/use/docs.js'
import { ref } from 'vue';
import CustomButton from '../components/CustomButton.vue'

const { docList,
    addDocs,
    changeAllDocsState,
    changeFinishedDocsState,
    changeUnFinishedDocsState,
    resultDocs,
    allDocsState,
    finishedDocsState,
    unFinishedDocsState
} = docs();
const activities = ref('');

const addDocItem = () => {
    changeAllDocsState();
    addDocs(activities.value);
    activities.value = '';
}

const isFinished = (item) => {
    console.log(item);
    item.finished = !item.finished;
}

</script>

<template>
    <div class=" w-[50%] h-[80%] border-solid border-4 bg-gray-100 m-auto mt-[100px] shadow-2xl">
        <div class="text-center text-4xl mt-10 text-teal-400">
            MyToDocs
        </div>
        <div class="mt-10 w-[95%] h-[70%] border-2 border-dashed border-cyan-500 m-auto text-center">
            <div class="w-[60%] m-auto mt-4 inline-block">
                <form action="">
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input v-model="activities"
                            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" " />
                        <label
                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            请输入待办事项
                        </label>
                    </div>
                </form>
            </div>
            <button class="w-36 h-10 bg-slate-600 rounded-[8px] text-white ml-5" @click="addDocItem">添加</button>
            <div>
                <div class="text-left m-auto w-[80%] my-4" v-for="(item, index) in resultDocs" :key="item.id"
                    :index="index">
                    <span>{{ item.id }}.</span>
                    <input type="checkbox" class="ml-[40%] mr-3" :checked="item.finished" @change="isFinished(item)">{{
                        item.content }}
                </div>
            </div>
            <div>
                <div class="mt-3">
                    <template v-if="finishedDocsState">
                        已完成
                    </template>
                    <template v-else-if="unFinishedDocsState">
                        待完成
                    </template>
                    <template v-else>
                        全部
                    </template>
                    共有{{ resultDocs.length }}项
                </div>
                <div class="m-auto my-3">
                    <custom-button @btn-click="changeAllDocsState">
                        <template #btnText>
                            全部
                        </template>
                    </custom-button>
                    <custom-button @btn-click="changeUnFinishedDocsState">
                        <template #btnText>
                            待完成
                        </template>
                    </custom-button>
                    <custom-button @btn-click="changeFinishedDocsState">
                        <template #btnText>
                            已完成
                        </template>
                    </custom-button>
                </div>
            </div>
        </div>

    </div>
</template>



<style scoped></style>