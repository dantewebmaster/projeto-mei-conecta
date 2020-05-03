import { db } from '../firebase';

export const api = db.collection('business').add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
}).then((result) => console.log('Sucesso', result.id))
.catch((error) => console.error(error))
