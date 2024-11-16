'use client';

import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import bigInt from 'big-integer';

class TelegramApiClient {
  private static instance: TelegramApiClient;

  private client: TelegramClient;

  private SESSION = new StringSession(import.meta.env.VITE_TELEGRAM_SESSION);
  private API_ID = Number(import.meta.env.VITE_TELEGRAM_API_ID);
  private API_HASH = import.meta.env.VITE_TELEGRAM_API_HASH;

  private constructor() {
    console.log(
      import.meta.env.VITE_TELEGRAM_SESSION,
      this.API_ID,
      this.API_HASH,
    );
    this.client = new TelegramClient(this.SESSION, this.API_ID, this.API_HASH, {
      connectionRetries: 5,
    });
  }

  public async initialize(): Promise<void> {
    try {
      if (!this.client.connected) {
        await this.client.connect();
        console.log('Telegram client connected.');
      }
    } catch (error) {
      console.error('Failed to connect Telegram client:', error);
      throw error;
    }
  }

  async sendMessage() {
    await this.client.sendMessage('me', {
      message: "You're successfully logged in!",
    });
  }

  async getPhotos() {
    const result = await this.client.invoke(
      new Api.photos.GetUserPhotos({
        userId: 'shestaya_liniya',
      }),
    );
    const photo = result.photos[0];
    //@ts-ignore
    const bufff = photo.fileReference;

    const bufferData = await this.client.downloadFile(
      new Api.InputPhotoFileLocation({
        //@ts-ignore
        id: photo.id.value,
        //@ts-ignore
        accessHash: photo.accessHash.value,
        fileReference: bufff,
        thumbSize: 'c',
      }),
      {
        //@ts-ignore
        dcId: photo.dcId,
        fileSize: bigInt(829542),
      },
    );
    //@ts-ignore
    return bufferData;
  }

  public static getInstance() {
    if (!TelegramApiClient.instance) {
      TelegramApiClient.instance = new TelegramApiClient();
    }
    return TelegramApiClient.instance;
  }
}

interface Photo {

}

export default TelegramApiClient;
