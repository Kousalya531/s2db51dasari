var tea = require('../models/tea');

// List of all tea
exports.tea_list = async function(req, res) {
    try{
    thetea = await tea.find();
    res.send(thetea);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

//exports tea_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: tea list');
//};
// for a specific tea.
exports.tea_detail = async function(req, res) {
 //res.send('NOT IMPLEMENTED: tea detail: ' + req.params.id);
 console.log("detail"  + req.params.id) 
 try { 
     result = await tea.findById( req.params.id) 
     res.send(result) 
 } catch (error) { 
     res.status(500) 
     console.log("test--")
     res.send(`{"error": document for id ${req.params.id} not found`); 
 } 
};
// Handle tea create on POST.
// Handle tea create on POST.
exports.tea_create_post = async function(req, res) {
    console.log(req.body)
    let document = new tea();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"tea_type":"goat", "cost":12, "size":"large"}
    document.tea_flavour = req.body.tea_flavour;
    document.tea_size = req.body.tea_size;
    document.tea_cost = req.body.tea_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle tea delete form on DELETE.
//exports.tea_delete = function(req, res) {
 //res.send('NOT IMPLEMENTED: tea delete DELETE ' + req.params.id);
//};
// Handle tea delete on DELETE. 
// Handle Costume delete on DELETE.
exports.tea_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await tea.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle tea update form on PUT.
//exports.tea_update_put = function(req, res) {
 //res.send('NOT IMPLEMENTED: tea update PUT' + req.params.id);
//};

//Handle tea update form on PUT. 
exports.tea_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await tea.findById( req.params.id) 
        console.log(req.body);
        // Do updates of properties 
        if(req.body.tea_flavour)  
               toUpdate.tea_flavour = req.body.tea_flavour; 
        if(req.body.tea_size) toUpdate.tea_size = req.body.tea_size; 
        if(req.body.tea_cost) toUpdate.tea_cost = req.body.tea_cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 

// VIEWS
// Handle a show all view
exports.tea_view_all_Page = async function(req, res) {
    try{
        console.log('test'+tea.find())
    thetea = await tea.find();
    res.render('tea', { title: 'tea Search Results', results: thetea });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.tea_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await tea.findById( req.query.id)
    res.render('teadetail',
   { title: 'tea Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.tea_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('teacreate', { title: 'tea Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.tea_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await tea.findById(req.query.id)
    res.render('teaupdate', { title: 'tea Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.tea_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await tea.findById(req.query.id)
    res.render('teadelete', { title: 'tea Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };