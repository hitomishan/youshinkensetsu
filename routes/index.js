var express = require('express');
var router = express.Router();
const path = require("path")
const app = express()
const {
  fetchMvImages,
  fetchConcept,
  fetchCeoMessage,
  fetchServices,
  fetchCarriers,
  fetchGalleries,
} = require("../src/fetchContents")


/* GET home page. */
router.get('/', async function(req, res, next) {
  const contents = {}
  Promise.all([
    contents.mvImages = await fetchMvImages(),
    contents.concept = await fetchConcept(),
    contents.ceoMessage = await fetchCeoMessage(),
    contents.services = await fetchServices(),
    contents.carriers = await fetchCarriers(),
    contents.galleries = await fetchGalleries(),
  ])
  res.render("top", { contents })
});

module.exports = router;
