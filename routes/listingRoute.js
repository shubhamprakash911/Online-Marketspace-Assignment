const express = require("express");
const {
  getListings,
  addListing,
  updateListing,
  deleteListingById,
  getListingById,
} = require("../controllers/listingController");

const listingRoute = express.Router();

listingRoute.route("/").get(getListings).post(addListing);
listingRoute
  .route("/:id")
  .patch(updateListing)
  .delete(deleteListingById)
  .get(getListingById);

module.exports = listingRoute;
