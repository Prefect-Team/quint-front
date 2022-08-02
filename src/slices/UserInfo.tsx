import { createSlice } from "@reduxjs/toolkit";
// import { error } from "./MessagesSlice";
// import { t } from "@lingui/macro";
// import { ethers } from "ethers";

export interface Userinfo {
  nft: number;
  share: string;
  referralCode: string;
}

interface MessagesState {
  info: Userinfo;
}

const initialState = {
  nft: 0,
  share: "0",
  referralCode: "master",
};

const getBaseInfo = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const {} = getBaseInfo.actions;

export default getBaseInfo.reducer;
