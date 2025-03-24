import { useRegisterSW } from 'virtual:pwa-register/solid';

import type { Component } from 'solid-js';
import { Show } from 'solid-js';

const PWABadge: Component = () => {
  // check for updates every hour
  const period = 60 * 60 * 1000;

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      if (period <= 0) return;
      if (r?.active?.state === 'activated') {
        registerPeriodicSync(period, swUrl, r);
      } else if (r?.installing) {
        r.installing.addEventListener('statechange', (e) => {
          const sw = e.target as ServiceWorker;
          if (sw.state === 'activated') registerPeriodicSync(period, swUrl, r);
        });
      }
    },
  });

  function close() {
    setOfflineReady(false);
    setNeedRefresh(false);
  }

  return (
    <div
      role="alert"
      aria-labelledby="toast-message"
      class="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 transform"
    >
      <div class="pointer-events-auto">
        <Show when={offlineReady() || needRefresh()}>
          <div class="ring-opacity-5 rounded-lg bg-white p-4 shadow-lg ring-1 ring-black dark:bg-gray-800">
            <div class="mb-3">
              <Show
                fallback={
                  <span
                    id="toast-message"
                    class="text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    New content available, click on reload button to update.
                  </span>
                }
                when={offlineReady()}
              >
                <span
                  id="toast-message"
                  class="text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  App ready to work offline
                </span>
              </Show>
            </div>
            <div class="flex justify-end space-x-2">
              <Show when={needRefresh()}>
                <button
                  onClick={() => updateServiceWorker(true)}
                  class="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                >
                  Reload
                </button>
              </Show>
              <button
                onClick={() => close()}
                class="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </Show>
      </div>
    </div>
  );
};

export default PWABadge;

/**
 * This function will register a periodic sync check every hour, you can modify the interval as needed.
 */
function registerPeriodicSync(
  period: number,
  swUrl: string,
  r: ServiceWorkerRegistration
) {
  if (period <= 0) return;

  setInterval(async () => {
    if ('onLine' in navigator && !navigator.onLine) return;

    const resp = await fetch(swUrl, {
      cache: 'no-store',
      headers: {
        cache: 'no-store',
        'cache-control': 'no-cache',
      },
    });

    if (resp?.status === 200) await r.update();
  }, period);
}
