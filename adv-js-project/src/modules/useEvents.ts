import { ref, onMounted } from 'vue';
import { eventsCollection, eventsFirebaseCollectionRef, db } from "./firebase";
import { onSnapshot, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

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
    const editingId = ref<string | null>(null);

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

    //Step 6: create a function to edit a event from the list
    const updateEvent = async (id:string, newEventTitle: string, newEventTime:string) => {
        console.log("editing an event");
        const eventDocRef = doc(db, eventsFirebaseCollectionRef, id);
        if (newEventTitle.trim() !== '' || newEventTime.trim() !== '') {
            await updateDoc(eventDocRef, {
              title: newEventTitle,
              time: newEventTime
            });
            console.log(`Updated event with id: ${id} to new title: ${newEventTitle}`);
        }
        else{
            return;
        }
        editingId.value = null; // Reset editingId to exit edit mode
    }

    const enterEditMode = (event: Event) => {
        editingId.value = event.id; // Set the editing ID to the selected event
        newEventTitle.value = event.title; // Set the input value to the current title
    };

    return {
        events, 
        newEventTitle,
        newEventTime,
        editingId,
        enterEditMode,
        addEvent,
        deleteEvent,
        updateEvent
    }
}
