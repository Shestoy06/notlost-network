"use client"

import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import utyaCool from '../../../public/utya-cool.gif'
import {Button} from "@telegram-apps/telegram-ui";
import {APP_NAME} from "../../lib/utils/const";
import {usePasskeyAuth} from "jazz-react";
import {useLaunchParams} from "@telegram-apps/sdk-react"

export const Route = createFileRoute('/onboarding/')({
  component: Onboarding,
})

function Onboarding() {
  const lp = useLaunchParams()

  const [auth, authState] = usePasskeyAuth({appName: APP_NAME});

  if (authState.state === "signedIn") {
    return null;
  }

  if (authState.state !== "ready") {
    return null;
  }

  const { signUp } = authState;

  const handleSignUp = () => {
    // TODO: VALIDATE INIT DATA
    signUp(lp.initData!.user!.id.toString());
  }

  return (
    <div className="h-screen p-4 relative flex flex-col">
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={utyaCool} alt={'Utya sticker'} height={180} width={180}/>

        <div className='opacity-60 text-xl text-center'>
          Let's get started to enhance your networking experience through telegram
        </div>
      </div>
      <Button className='mt-auto' onClick={handleSignUp}>Continue</Button>
    </div>
  )
}
