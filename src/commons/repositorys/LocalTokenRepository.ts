interface LocalTokenInterface {
  save(token: string): void;
  get(): string | null;
  remove(): void;
}

export class LocalTokenRepository implements LocalTokenInterface {
  token_key: string;
  constructor() {
    this.token_key = process.env.REACT_APP_TOKEN_KEY ?? '';
  }

  save = (token: string) => localStorage.setItem(this.token_key, token);

  get = () => localStorage.getItem(this.token_key);

  remove = () => localStorage.removeItem(this.token_key);
}
