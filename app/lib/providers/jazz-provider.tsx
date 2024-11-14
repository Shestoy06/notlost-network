'use client';

import React from 'react';
import { UserAccount } from '@/lib/schema';
import { createJazzReactApp } from 'jazz-react';
import { DemoAuthBasicUI, useDemoAuth } from 'jazz-react';

const Jazz = createJazzReactApp<UserAccount>({
  AccountSchema: UserAccount,
});

function assertPeerUrl(
  url: string | undefined,
): asserts url is `wss://${string}` | `ws://${string}` {
  if (!url) {
    throw new Error('JAZZ_PEER_URL is not defined');
  }
  if (!url.startsWith('wss://') && !url.startsWith('ws://')) {
    throw new Error('JAZZ_PEER_URL must start with wss:// or ws://');
  }
}

const JAZZ_PEER_URL = (() => {
  const rawUrl = import.meta.env.VITE_JAZZ_PEER_URL;
  assertPeerUrl(rawUrl);
  return rawUrl;
})();

export function JazzAndAuth({ children }: { children: React.ReactNode }) {
  /*const [auth, authState] = usePasskeyAuth({appName: APP_NAME});

  const navigate = useNavigate();

  useEffect(() => {
    if (authState.state !== "signedIn") {
      navigate({ to: '/onboarding' });
    }
  }, [authState, navigate]);*/

  const [auth, authState] = useDemoAuth();

  return (
    <>
      <Jazz.Provider auth={auth} peer={JAZZ_PEER_URL}>
        {children}
      </Jazz.Provider>
      {authState.state !== 'signedIn' && (
        <DemoAuthBasicUI appName="Jazz Book Shelf" state={authState} />
      )}
    </>
  );
}
