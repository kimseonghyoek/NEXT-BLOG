import { atom } from 'recoil';

export const nickname = atom({
  key: 'nickname',
  default: 'User'
});

export const birth = atom({
  key: 'birth',
  default: ''
});

export const email = atom({
  key: 'email',
  default: ''
});

export const pw = atom({
  key: 'pw',
  default: ''
});

