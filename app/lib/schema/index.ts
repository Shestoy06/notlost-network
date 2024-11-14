import { CoMap, co, Account, Profile } from 'jazz-tools';

export class UserRoot extends CoMap {
  telegramId = co.number;
}

export class UserAccount extends Account {
  profile = co.ref(Profile);
  root = co.ref(UserRoot);

  /** The account migration is run on account creation and on every log-in.
   *  You can use it to set up the account root and any other initial CoValues you need.
   */
  migrate(
    this: UserAccount,
    creationProps?: { name: string; telegramId: number },
  ) {
    super.migrate(creationProps);
    if (!this._refs.root) {
      this.root = UserRoot.create(
        {
          telegramId: creationProps?.telegramId || 0,
        },
        { owner: this },
      );
    }
  }
}
