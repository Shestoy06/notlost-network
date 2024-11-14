'use client';

import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  init as initSDK,
} from '@telegram-apps/sdk-react';

/**
 * Initializes the application and configures its dependencies.
 */
export function initTgEnv(debug: boolean): void {
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Mount all components used in the project.
  backButton.isSupported() && backButton.mount();
  miniApp.mount();
  themeParams.mount();
  initData.restore();
  viewport
    .mount()
    .then(() => {
      console.log('Viewport mounted successfully');
      viewport.bindCssVars(); // Bind CSS vars to viewport
      miniApp.bindCssVars(); // Bind CSS vars to miniApp
      themeParams.bindCssVars(); // Bind CSS vars to themeParams
    })
    .catch((e) => {
      console.error('Something went wrong mounting the viewport', e);
    });

  // Define components-related CSS variables.
  // Once mounted, bind CSS variables
}
