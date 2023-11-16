
import { updateAppConfig } from '#app'
import { defuFn } from 'D:/kelas-smkcoding/eccommerce/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwa2RybnByYmR2emduZnp3Y3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5OTY3MjgsImV4cCI6MjAxNDU3MjcyOH0.z-kKGr67gfPOQcTRKY8h2d_UoSk5LFudVporzsC4otc",
  "baseUrl": "https://ypkdrnprbdvzgnfzwcuw.supabase.co",
  "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwa2RybnByYmR2emduZnp3Y3V3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODk5NjcyOCwiZXhwIjoyMDE0NTcyNzI4fQ.mAyKmP5nvWMjUQ7Ygn9VlyZQ9eMiH2MWCrTC30mdxwo",
  "storageUrl": "https://ypkdrnprbdvzgnfzwcuw.supabase.co/storage/v1",
  "baseStorageUrl": "https://ypkdrnprbdvzgnfzwcuw.supabase.co/storage/v1/object/public/",
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
