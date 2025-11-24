interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export interface sessionType {
  user?: User | null;
  expires: string;
}
