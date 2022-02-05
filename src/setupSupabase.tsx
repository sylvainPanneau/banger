import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://mfjozftpzioedrbzxdng.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY1Njk2NSwiZXhwIjoxOTU5MjMyOTY1fQ.8rDlCP3lTz1LRDTSU2IYdJi3UCFSBmykBhK7yHgQKJE'
);
