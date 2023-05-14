import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['user'], // only persist the user object
  transforms: [encryptTransform({ secretKey: 'my-super-secret-key' })], // encrypt the auth state
};
