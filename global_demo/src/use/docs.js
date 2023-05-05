import { computed, reactive, ref } from "vue"

export default function docs() {
    const docList = reactive([])

    const addDocs = (val) => {
        if (val == '') {
            alert('待办事项内容不可以为空!');
            return;
        }
        if (docList.length == 5) {
            alert('添加待办事项已上限');
            return;
        }
        docList.push({
            id: docList.length + 1,
            content: val,
            finished: false
        });
    }

    const allDocsState = ref(true);
    const finishedDocsState = ref(false);
    const unFinishedDocsState = ref(false);


    const changeAllDocsState = ()=>{
        allDocsState.value = true;
        finishedDocsState.value = false;
        unFinishedDocsState.value = false;
    }
    
    const changeFinishedDocsState = ()=>{
        allDocsState.value = false;
        finishedDocsState.value = true;
        unFinishedDocsState.value = false;
    }

    const changeUnFinishedDocsState = ()=>{
        allDocsState.value = false;
        finishedDocsState.value = false;
        unFinishedDocsState.value = true;
    }

    const resultDocs = computed(() => {
        if (allDocsState.value === true) {
            return docList;
        } else if (finishedDocsState.value === true) {
            return docList.filter((item) => item.finished === true)
        } else {
            return docList.filter((item) => item.finished === false);
        }
    })

    return {
        docList,
        addDocs,
        changeAllDocsState,
        changeFinishedDocsState,
        changeUnFinishedDocsState,
        resultDocs,
        allDocsState,
        finishedDocsState,
        unFinishedDocsState
    }
}