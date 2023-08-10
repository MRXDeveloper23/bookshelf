export interface User {
  username: string;
  email: string;
  key: string;
  secret: string;
}

export enum NotificationType {
  Success = "success",
  Error = "error",
}
