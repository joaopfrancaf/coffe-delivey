import RoutesApp from "./Routes";
import Header from "./components/Header";
/*import { createServer } from "miragejs"

import data from './data.json'

createServer({
  routes() {
    this.get("api/coffe", () => {
      return data
    }),

      this.post("/api/coffe", (_schema, request) => {
        const attrs = JSON.parse(request.requestBody)

        return attrs
      })
  },
})*/

//window.Notification.requestPermission(permission => {
//})

navigator.serviceWorker.register("service-worker.js")
  .then(async serviceWorker => {
    let subs = await serviceWorker.pushManager.getSubscription()

    if(!subs) {
      const publicKeyRes = await fetch("https://coffe-api-nextjs.vercel.app/api/push/public_key")
      
      const publicKey = await publicKeyRes.json();
      
      subs = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKey
      });
    }

    await fetch("https://coffe-api-nextjs.vercel.app/api/push/register", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(subs)
    })

    await fetch("https://coffe-api-nextjs.vercel.app/api/push/send", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(subs)
    })
  })

export default function App() {

  return (
    <>
      <Header />
      <RoutesApp />
    </>
  )
}