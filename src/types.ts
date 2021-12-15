import { UserInfo } from "@uauth/js";

export type User = UserInfo | undefined;

export type Token = {
  tokenInfo: {
    name: string;
    symbol: string;
    image: string;
    decimals: string;
    coingecko: string;
    price: {
      rate: number;
    };
  };
  balance: number;
};

export type Holding = {
  name: string;
  symbol: string;
  balance: number;
  image: string;
  rate: number;
  value: number;
};
