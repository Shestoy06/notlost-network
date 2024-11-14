'use client';

import React, { PropsWithChildren } from 'react';
import { initTgEnv } from '@/lib/utils/telegram/init-tg-env';
import { useClientOnce } from '@/lib/utils/telegram/hooks/use-client-once';
import { useTelegramMock } from '@/lib/utils/telegram/hooks/use-telegram-mock';
import {
  miniApp,
  useLaunchParams,
  useSignal,
} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { useDidMount } from '@/lib/utils/telegram/hooks/use-did-mount';
import { ErrorBoundary } from '@/components/error-boundary';
import { ErrorPage } from '@/components/error-page';
import '@telegram-apps/telegram-ui/dist/styles.css';

function Inner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === 'development';

  // Mock Telegram environment in development mode if needed.
  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === 'debug';

  // Initialize the library.
  useClientOnce(async () => {
    initTgEnv(debug);
  });

  const isDark = useSignal(miniApp.isDark);

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      {children}
    </AppRoot>
  );
}

function TelegramProvider(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <Inner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="root__loading">Loading</div>
  );
}

export default TelegramProvider;
