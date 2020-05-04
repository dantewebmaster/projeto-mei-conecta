import { db } from '../firebase';

const partnershipRef = db.collection('partnership');

export default class PartnershipApi {

  getPartnershipById = (parnetshipId) => {
    partnershipRef.doc(parnetshipId).get()
    .then((result) => result.data)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  getAllPartnership = (businessId) => {
    partnershipRef.where('businessId', '==', businessId)
    .where('name', '==', name)
    .where('uf', '==', uf)
    .where('city', '==', city)
    .get()
    then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  addPartnership = (partnership) => {
    return partnershipRef.add(partnership)
    .then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  updatePartnership = (partnershipId, partnership) => {
    return partnershipRef.doc(partnershipId).update(partnership)
    .then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  removePartnership = (partnershipId) => {
    partnershipRef.doc(partnershipId).set({
      status: 3, // canceled
      updateAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

}



