import { db } from '../firebase';

const businessRef = db.collection('business');

export default class BusinessApi {

  getBusinessById = (businessId) => {
    businessRef.doc(businessId).get()
    .then((result) => result.data)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  getAllBusiness = ({ category, name, uf, city }) => {
    businessRef.where('category', '==', category)
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

   addBusiness = (business) => {
    return businessRef.add(business)
    .then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  updateBusiness = (businessId, business) => {
    return businessRef.doc(businessId).update(business)
    .then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  removeBusiness = (businessId) => {
    businessRef.doc(businessId).delete()
    .then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

}



