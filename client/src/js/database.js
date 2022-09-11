import { openDB } from 'idb';

const initdb = async () =>
  openDB('pwate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('pwate')) {
        console.log('pwate database already exists');
        return;
      }
      db.createObjectStore('pwate', { keyPath: 'id', autoIncrement: true });
      console.log('pwate database created');
    },
  });


export const putDb = async (content) => {
  console.error('putDb not implemented');

const pwateDb = await openDB('pwate', 1);
const tx = pwateDb.transaction('pwate', readwrite);
const store = tx.objectStore('pwate');

let request = store.put({ id: 1, value: content });
let result = await request;
if (!result) {
  request = store.add({ value: content });
  result = await request;
}

console.log('Results saved', result);
};

export const getDb = async () => {
  console.error('Error retriving Data');

  const pwateDb = await openDB('pwate', 1);
  const tx = pwateDb.transaction('pwate', readonly);
  const store = tx.objectStore('pwate');

  let request = store.count();
  let result = await request;

  if (result) {
    return await store.get(1)[0].value;
  }
  return result;
};

initdb();