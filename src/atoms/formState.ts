import { atom } from 'recoil';

const formState = atom({
  key: 'FormState',
  default: {
    developer: '',
    purpose: '',
    reason: '',
    date: '',
    previousCondition: '',
    modification: '',
  },
});

export default formState;
