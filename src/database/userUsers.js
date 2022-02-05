import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const db = createClient(
  'https://mfjozftpzioedrbzxdng.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY1Njk2NSwiZXhwIjoxOTU5MjMyOTY1fQ.8rDlCP3lTz1LRDTSU2IYdJi3UCFSBmykBhK7yHgQKJE'
);

export function useUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    db.from('users')
      .select('*')
      .then(u => setUsers(u.data));
  }, []);
  return users;
}

export function useLike() {
  return user => {
    console.debug({ user });
    if (!user.id) {
      throw new Error('user has no id, did you pass a user ?');
    }
    db.from('users')
      .update({ likes: user.likes + 1 })
      .eq('id', user.id)
      .then(console.log);
  };
}
