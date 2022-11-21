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

export const setting_item = atom({
  key: 'setting_item',
  default: 'User Info',
})

export const show_item = atom({
  key: 'show_item',
  default: true,
})
