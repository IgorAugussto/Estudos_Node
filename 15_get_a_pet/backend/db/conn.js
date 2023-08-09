require('dotenv').config()
const { createClient } = require ('@supabase/supabase-js')



const supabaseUrl = process.env.NODE_SUPABASE_URL
const supabaseKey = process.env.NODE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase