export interface AuthResponseData {
  successful: boolean;
  result: string;
  user: {
    email: string;
    name: any;
  }
}