// lib/mailingListService.ts
import { db } from './firebase';
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

/**
 * Adds a new user to the mailing list.
 * Checks for duplicates before adding.
 * @param email The user's email address.
 * @param name The user's name.
 * @throws An error if the email already exists or if there's a problem with the database operation.
 */
export async function addToMailingList(email: string, name: string) {
    if (!email) {
        throw new Error("Adres e-mail jest wymagany.");
    }

    // Use the email as the document ID to enforce uniqueness
    const docRef = doc(db, "mailingList", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // If the document exists, the email is already in the list.
        throw new Error("Ten adres e-mail jest już na liście.");
    }

    // If we are here, the email does not exist, so we can add it.
    try {
        await setDoc(docRef, {
            name: name,
            email: email,
            timestamp: serverTimestamp()
        });
    } catch (error) {
        console.error("Error adding document to mailing list: ", error);
        // Re-throw a more user-friendly error
        throw new Error("Nie udało się dodać adresu e-mail do listy.");
    }
}
