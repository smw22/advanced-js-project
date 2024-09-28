// import { ref, onMounted } from 'vue';
// import { collection, getDocs, onSnapshot } from 'firebase/firestore';
// import { db, calendarDaysCollection, daysFirebaseCollectionRef } from './firebase';

// export function useCalendar() {
//     const calendarDays = ref([]);
//     const dayDate = ref('');

//     const fetchCalendarDays = async () => {
//         const daysSnapshot = await getDocs(calendarDaysCollection);
//         calendarDays.value = daysSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     };

//     onMounted(() => {
//         fetchCalendarDays();
//     });

//     return {
//         calendarDays
//     }
// }

