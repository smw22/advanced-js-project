import { ref } from 'vue';

const isFormVisible = ref(false); // Initially hidden

export function formVisibility() {

    const showForm = () => {
        isFormVisible.value = true;
    };

    const hideForm = () => {
        isFormVisible.value = false;
    };

    return {
        isFormVisible,
        showForm,
        hideForm,
    };
}