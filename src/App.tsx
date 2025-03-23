import { createSignal } from 'solid-js'
import solidLogo from '@/assets/solid.svg'
import appLogo from '/favicon.svg'
import PWABadge from '@/components/pwa-badge'

import '@/styles/globals.css';

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={appLogo} class="logo" alt="mahe-openhouse-2025 logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>mahe-openhouse-2025</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
      <PWABadge />
    </>
  )
}

export default App
