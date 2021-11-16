var Vegetables = require('../models/vegetables');
// List of all vegetabless
exports.vegetables_list = function (req, res) {
    res.send('NOT IMPLEMENTED: vegetables list');
};
// for a specific vegetables.
// for a specific vegetables.
exports.vegetables_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Vegetables.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle vegetables create on POST.
exports.vegetables_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Vegetables();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"vegetables_name":"regular", "color":13, "weight":43.56}
    document.vegetables_name = req.body.vegetables_name;
    document.color = req.body.color;
    document.weight = req.body.weight;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle vegetables delete on DELETE.
exports.vegetables_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Vegetables.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle vegetables update form on PUT.
exports.vegetables_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Vegetables.findById( req.params.id)
 // Do updates of properties
 if(req.body.vegetables_name)
 toUpdate.vegetables_name = req.body.vegetables_name;
 if(req.body.color) toUpdate.color = req.body.color;
 if(req.body.weight) toUpdate.weight = req.body.weight;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all vegetabless
exports.vegetables_list = async function (req, res) {
    try {
        theVegetables = await Vegetables.find();
        res.send(theVegetables);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.vegetables_view_all_Page = async function (req, res) {
    try {
        theVegetables = await Vegetables.find();
        res.render('vegetables', {
            title: 'vegetables Search Results',
            results: theVegetables
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.vegetables_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Vegetables.findById( req.query.id)
    res.render('vegetablesdetail',
   { title: 'vegetables Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a vegetables.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vegetables_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('vegetablescreate', { title: 'vegetables Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a vegetables.
// query provides the id
exports.vegetables_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Vegetables.findById(req.query.id)
    res.render('vegetablesupdate', { title: 'vegetables Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.vegetables_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Vegetables.findById(req.query.id)
    res.render('vegetablesdelete', { title: 'vegetables Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };