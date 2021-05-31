/** @format */
import fetch from "node-fetch";

import { Profile } from "../repositories/profile.repository";
import { ErrorMessage, RouteParams } from "../utils/types";
import { IUser } from "../models/user";
import { IProfile } from "../models/profile";
export const getProfile: RouteParams = async (req, res) => {
  const user = await Profile.findById(req.userId);
  res.json(user);
};

export const getUser = async (token: string, id: string = "") => {
  const response = await fetch(
    `https://identityapptest.herokuapp.com/api/user/${id}`,
    {
      headers: { "x-token": token },
    }
  );

  return (await response.json()) as IUser;
};

export const createProfile: RouteParams = async (req, res) => {
  const profile = (await Profile.findById(req.userId)) as IProfile;
  console.log("********************");
  console.log(req.userId);
  console.log("********************");
  if (!profile) {
    await new Profile({
      _id: req.userId,
      raffles: [],
    }).save();
  }
  res.json(true);
};
