import { ref } from 'vue';

const eventFormVisible = ref(false);
const loginFormVisible = ref(false);

export function formVisibility() {
    const showEventForm = () => {
        eventFormVisible.value = true;
    };

    const hideEventForm = () => {
        eventFormVisible.value = false;
    };

    const showLoginForm = () => {
        loginFormVisible.value = true;
    };

    const hideLoginForm = () => {
        loginFormVisible.value = false;
    };

    return {
        eventFormVisible,
        loginFormVisible,
        showEventForm,
        hideEventForm,
        showLoginForm,
        hideLoginForm
    };
}
