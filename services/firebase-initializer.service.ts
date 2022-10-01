import { initializeApp } from 'firebase/app';

import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAbjxmVJjQ_iMhyZEAS-jil8yxZUJbrV-E',
  authDomain: 'zakharovda95-17636.firebaseapp.com',
  databaseURL: 'https://zakharovda95-17636-default-rtdb.firebaseio.com',
  projectId: 'zakharovda95-17636',
  storageBucket: 'zakharovda95-17636.appspot.com',
  messagingSenderId: '960642520317',
  appId: '1:960642520317:web:4f70eaf3bc957690ab1a94',
};

const app = initializeApp(firebaseConfig);

export const firebaseDatabase = getDatabase(app);
export const firebaseStorage = getStorage(app);
