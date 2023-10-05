const asyncHandler = require("../middlewares/asyncHandler");
const Listing = require("../models/ListingModel");

// @desc    Get all listing data
// @route   GET /api/listing
// @access  Public
const getListings = asyncHandler(async (req, res) => {
  const listing = await Listing.find();
  res.status(200).json({ success: true, data: listing });
});

// @desc    Get listing data by id
// @route   GET /api/listing/:id
// @access  Public
const getListingById = asyncHandler(async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.status(200).json({ success: true, data: listing });
});

// @desc    Add list data
// @route   POST /api/listing/
// @access  Public
const addListing = asyncHandler(async (req, res) => {
  const listing = await Listing.create(req.body);
  res.status(200).json({ success: true, data: listing });
});

// @desc    Update listing data by id
// @route   PATCH /api/listing/:id
// @access  Public
const updateListing = asyncHandler(async (req, res) => {
  const listing = await Listing.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body, // only update fields that are present in req.body and leaving the rest of the document's fields unchanged
    },
    { new: true } // return updated document
  );
  res.status(204).json({ success: true, data: listing });
});

// @desc    Delete list data
// @route   DELETE /api/listing/:id
// @access  Public
const deleteListingById = asyncHandler(async (req, res) => {
  const listing = await Listing.findByIdAndDelete(req.params.id);
  res.status(202).json({ success: true, data: listing });
});

module.exports = {
  getListings,
  addListing,
  getListingById,
  updateListing,
  deleteListingById,
};
