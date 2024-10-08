import { ref, onMounted } from 'vue';
import { eventsCollection, eventsFirebaseCollectionRef, db } from "./firebase";
import { onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';

// Define an interface for event objects
interface Event {
    id: string;
    title: string;
    time: string
}

export const useEvents = () => {
    
    // //Step 1: new event title and time and stored in a ref
    const newEventTitle = ref('');
    const newEventTime = ref('');

    //Step 2: list of events stored in a li in a ref
    const events = ref<Event[]>([]);

    //Step 3: create a function to retrieve a new event from the list
    onMounted(() => {
        onSnapshot(eventsCollection, (snapshot) => {
        events.value = snapshot.docs.map(doc => ({
            ...doc.data() as Event, //spread operator
            id: doc.id
            // title: doc.data().title,
        }))
        })
    });
    
    //Step 4: create a function to add a new event to the list
    const addEvent = async () => {
        if (newEventTitle.value.trim() == '' || newEventTime.value.trim() == '') 
        return; //checks if input is empty, then returns(stop function)

        console.log("test")
    
        await addDoc(eventsCollection, {
        title: newEventTitle.value,
        time: newEventTime.value
        })
    
        newEventTitle.value = '';
        newEventTime.value = '';
        console.log('added event');
    }
    
    //Step 5: create a function to delete a event from the list
    const deleteEvent = async (id:string) => {
        console.log("deleting event with id", id)
        await deleteDoc(doc(db, eventsFirebaseCollectionRef, id))
    }

    return {
        events, 
        newEventTitle,
        newEventTime,
        addEvent,
        deleteEvent
    }
}
