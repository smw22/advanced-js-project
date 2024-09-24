import { ref, onMounted } from 'vue';
import { calendarDaysCollection, daysFirebaseCollectionRef, db } from "./firebase";
import { onSnapshot } from 'firebase/firestore';


export const useCalendarDays = () => {
    const date = ref('');

    const datelist = ref<Event[]>([]);

    onMounted(() => {
        onSnapshot(calendarDaysCollection, (snapshot) => {
        datelist.value = snapshot.docs.map(doc => ({
            ...doc.data() as Event, //spread operator
            id: doc.id
            // title: doc.data().title,
        }))
        })
    });
}