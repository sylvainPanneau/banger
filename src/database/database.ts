import { useEffect, useState } from 'react';
import { supabase } from '../setupSupabase';

export function useUsers() {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    supabase
      .from('users')
      .select('*')
      .then(u => setUsers(u.data || []));
  }, []);
  return users;
}

export function useLike(): (user: { id: number; likes: number }) => void {
  return user => {
    console.debug({ user });
    if (!user.id) {
      throw new Error('user has no id, did you pass a user ?');
    }
    supabase
      .from('users')
      .update({ likes: user.likes + 1 })
      .eq('id', user.id)
      .then(console.log);
  };
}
