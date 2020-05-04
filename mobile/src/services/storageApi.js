import { storage } from '../firebase';

export const addImage = (businessId, type, file) => {
  const metadata = {
    contentType: 'image/jpeg',
  };
  return new Promise((resolve, reject) => {
    storage.child(`${businessId}/${type}.jpeg`).put(file, metadata)
    .then((snapshot) => { 
      snapshot.ref.getDownloadURL()
      .then((downloadURL) => resolve(downloadURL));
    })
    .catch((error) => reject(error));
  });
}