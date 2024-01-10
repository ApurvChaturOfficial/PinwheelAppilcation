import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "registerType": 'autoUpdate',
        "name":"Pinwheel Organisation",
        "short_name":"Pinwheel",
        "display": "standalone",
        "background_color": "#241468",
        "theme_color": "#241468",
        "icons":[
          {
            src: "Business/Pinwheel/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Pinwheel/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
    })
  ],
 
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
