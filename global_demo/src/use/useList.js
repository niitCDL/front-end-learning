import { computed, reactive, ref } from "vue";

export default function useTodoList() {
    const todoItems = reactive([
        {
            id: 1,
            title: '吃饭',
            finished: false,
            fontState:false,
        },
        {
            id: 2,
            title: '上课',
            finished: false,
            fontState:false,
        },
        {
            id: 3,
            title: '运动',
            finished: true,
            fontState:false,
        },
    ])

    const printList = () => {

    }


    const addItem = (val) => {
        todoItems.push({
            id: todoItems.length + 1,
            title: val,
            finished: false,
            fontState:false,
        })
    }

    const finishedCount = computed(() => {
        return todoItems.filter((item) => item.finished === true).length;
    })

    const fontStateCount = computed(()=>{
        return todoItems.filter((item) => item.fontState === true).length;
    })

    const changeFontState = (item) => {
        item.fontState = !item.fontState;
    }


    return {
        todoItems,
        addItem,
        finishedCount,
        fontStateCount,
        changeFontState
    }


}