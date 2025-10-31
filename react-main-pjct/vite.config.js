import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:"0.0.0.0",
    allowedHost:['localhost',         
      '127.0.0.1',               
      'react-e37l.onrender.com']
  }
})
