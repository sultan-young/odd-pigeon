export enum Role {
    User,
    Assistant,
}

export interface ChatVO {
  text: string;
  role: Role;
  timeStamp: number;
}
