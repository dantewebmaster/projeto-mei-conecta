import { db } from '../firebase';

const partnershipRef = db.collection('partnership');

export const getPartnershipById = (parnetshipId) => {
  return new Promise((resolve, reject) => {
    partnershipRef.doc(parnetshipId).get()
      .then((result) => resolve(result.data))
      .catch((error) => reject(error));
  });
}

export const getAllPartnership = (businessId) => {
  return new Promise((resolve, reject) => {
    partnershipRef.where('fromBusinessId', '==', businessId).get()
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
  
export const addPartnership = (partnership) => {
  return new Promise((resolve, reject) => {
    partnershipRef.add(partnership)
    .then((doc) => resolve(doc.data()))
    .catch((error) => reject(error));
  });
}

export const updatePartnership = (partnershipId, partnership) => {
  return new Promise((resolve, reject) => {
    partnershipRef.doc(partnershipId).update(partnership)
    .then((doc) => resolve(doc.data()))
    .catch((error) => reject(error));
  });
}

export const removePartnership = (partnershipId) => {
  return new Promise((resolve, reject) => {
    partnershipRef.doc(partnershipId).set({
      status: 3, // canceled
      updateAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => resolve())
    .catch((error) => reject(error));
  });
}
