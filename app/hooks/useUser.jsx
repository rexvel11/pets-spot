import { useState, useEffect } from 'react';
import pb from '../pocketbase'; // Import PocketBase instance

export function useUser() {
  const [user, setUser] = useState(pb.authStore.model); // Get user from authStore

  useEffect(() => {
    const unsubscribe = pb.authStore.onChange((auth) => {
      setUser(auth.model); // Update user state when auth changes
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return { user };
}
