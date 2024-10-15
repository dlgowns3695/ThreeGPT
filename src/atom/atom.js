import { atom } from "recoil";

export const IsEnteredAtom = atom({
  key: "isEntered", // 고유한 ID
  default: false, // 기본값 설정
});
