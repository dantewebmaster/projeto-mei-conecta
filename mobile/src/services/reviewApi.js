import { db } from '../firebase';

const reviewRef = db.collection('review');

export default class ReviewApi {

  getReviewById = (reviewId) => {
    reviewRef.doc(reviewId).get()
    .then((result) => result.data)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  getAllReview = (businessId) => {
    reviewRef.where('id', '==', businessId).get()
    .then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  addReview = (businessId, review) => {
    return reviewRef.doc(businessId).add(review)
    .then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  updateReview = (reviewId, review) => {
    return reviewRef.doc(reviewId).update(review)
    .then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

  removeReview = (reviewId) => {
    reviewRef.doc(reviewId).delete()
    .then((result) => result.id)
    .catch((error) => {
      console.error(error);
      return(error);
    })
  }

}



