import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://qkbsqxkjrajircrrcgky.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImY2MmYzNDA4LTk0MzMtNGExMS05MWM3LWUzYzdiNjE3ZmY3MiJ9.eyJwcm9qZWN0SWQiOiJxa2JzcXhranJhamlyY3JyY2dreSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzYzMzIwNzkxLCJleHAiOjIwNzg2ODA3OTEsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.ZGsyEGCS6WARQqnpuY0DVnEiOFPp7xQD7koQYWB6ozY';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };