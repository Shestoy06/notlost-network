'use client';

import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router';
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start';
import type { ReactNode } from 'react';
import { JazzAndAuth } from '@/lib/providers/jazz-provider';
import { useTelegramMock } from '@/lib/utils/telegram/hooks/use-telegram-mock';
import TelegramProvider from '@/lib/providers/telegram-provider';

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'Notlost Network',
    },
  ],
  component: RootComponent,
});

function RootComponent() {
  const isDev = process.env.NODE_ENV === 'development';

  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  return (
    <RootDocument>
      <JazzAndAuth>
        <TelegramProvider>
          <Outlet />
        </TelegramProvider>
      </JazzAndAuth>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
