import { UserInfo } from "./user-info";

export interface Session {
  user: UserInfo,
  token: string
}