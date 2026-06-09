import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface ContactFormData {
  name: string;
  email: string;
  training: 'module_a' | 'module_b' | 'online' | 'other';
  message: string;
}

/**
 * Saves a contact form submission to Firestore.
 * Returns the auto-generated document ID on success.
 */
export async function submitContactForm(data: ContactFormData): Promise<string> {
  const docRef = await addDoc(collection(db, 'contacts'), {
    name: data.name,
    email: data.email,
    training: data.training,
    message: data.message,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
