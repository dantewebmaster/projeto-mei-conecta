import { db } from '../firebase';

const businessRef = db.collection('business');

export const getBusinessById = (businessId) => {
  return new Promise((resolve, reject) => {
    businessRef.doc(businessId).get()
    .then((doc) => resolve(doc.data()))
    .catch((error) => reject(error));
  });
}

export const getAllBusiness = ({ category, name, uf, city }) => {
  let query = businessRef;

  if (category) {
    query = query.where('category', '==', category);
  }
  if (name) {
    query = query.where('name', '==', name);
  }

  if (city) {
    query = query.where('uf', '==', uf).where('city', '==', city);
  } else if (uf) {
    query = query.where('uf', '==', uf);
  }
  
  return new Promise((resolve, reject) => {
    query.get()
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

export const addBusiness = (business) => {
  return new Promise((resolve, reject) => {
    businessRef.add(business)
    .then((doc) => resolve(doc.data()))
    .catch((error) => reject(error));
  });
}

export const updateBusiness = (businessId, business) => {
  return new Promise((resolve, reject) => {
    businessRef.doc(businessId).update(business)
    .then((doc) => resolve(doc.data()))
    .catch((error) => reject(error));
  });
}

export const removeBusiness = (businessId) => {
  return new Promise((resolve, reject) => {
    businessRef.doc(businessId).delete()
    .then(() => resolve())
    .catch((error) => reject(error));
  });
}
