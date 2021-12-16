import { UserInfo } from "@uauth/js";

// export type User = UserInfo | undefined;
export type User = string;

export type Token = {
  tokenInfo: {
    name: string;
    symbol: string;
    image: string;
    decimals: string;
    coingecko: string;
    price: {
      rate: number;
      diff: number;
      diff7d: number;
      diff30d: number;
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
  diff: number;
  diff7d: number;
  diff30d: number;
  coingecko: string;
};

interface IObjectKeys {
  [key: string]: number;
}

export interface Diffs extends IObjectKeys {
  diff: number;
  diff7d: number;
  diff30d: number;
}
