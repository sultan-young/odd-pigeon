export enum Role {
    User,
    AI,
}

export interface ChatVO {
  content: string;
  role: Role;
  timeStamp: number;
}
