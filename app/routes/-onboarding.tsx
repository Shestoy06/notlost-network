'use client';

import * as React from 'react';
import { useNavigate } from '@tanstack/react-router';
import utyaCool from '@/assets/utya-cool.gif';
import { Button } from '@telegram-apps/telegram-ui';

export function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="h-screen p-4 relative flex flex-col">
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={utyaCool} alt={'Utya sticker'} height={180} width={180} />
        <div className="text-3xl mt-4 mb-4">Make your contacts NotLost</div>
        <div className="text-primary text-center mt-4">
          Let's get started to enhance your networking experience through
          telegram
        </div>
      </div>
      <Button className="mt-auto" onClick={() => navigate({ to: '/graph' })}>
        Continue
      </Button>
    </div>
  );
}
