import { db } from '../firebase';

const categoryRef = db.collection('category');

export const getAllCategory = () => {
  return new Promise((resolve, reject) => {
    categoryRef.get()
    .then(function(querySnapshot) {
      const results = [];
      querySnapshot.forEach(function(doc) {
        results.push(doc.data());
      });
      resolve(results);
    })
    .catch((error) => reject(error));
  });
}