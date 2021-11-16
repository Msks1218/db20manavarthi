var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var vegetables_controller = require('../controllers/vegetables');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// vegetables ROUTES ///
// POST request for creating a vegetables.
router.post('/resource/vegetables', vegetables_controller.vegetables_create_post);
// DELETE request to delete vegetables.
router.delete('/resource/vegetables/:id', vegetables_controller.vegetables_delete);
// PUT request to update vegetables.
router.put('/resource/vegetables/:id', vegetables_controller.vegetables_update_put);
// GET request for one vegetables.
router.get('/resource/vegetables/:id', vegetables_controller.vegetables_detail);
// GET request for list of all vegetables items.
router.get('/resource/vegetables', vegetables_controller.vegetables_list);
module.exports = router;