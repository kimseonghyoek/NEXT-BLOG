import { Request } from "express";

export interface Local extends Request {
  id: number;
  username: string;
  email: string;
}
