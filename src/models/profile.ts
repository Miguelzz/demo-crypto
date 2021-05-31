/** @format */

import { IRaffle } from "./raffle";
import { Id } from "./shared";

export interface IProfile {
  id?: Id;
  raffles: IRaffle[];
}
