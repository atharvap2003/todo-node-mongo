const ToDoModel = require("../models/ToDoModel");

const handleGetToDo =  async function(req, res){
    const toDo = await ToDoModel.find({});
    res.send(toDo);
};

const handleSaveToDo = async function(req, res){
    const {text} = req.body;

    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added SuccessFully\n", data);
        res.send(data);
    })

}

const handleUpdateToDo = async function(req, res){
    const {_id, text} = req.body;
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Successfully."))
    .catch((err)=> console.log(err));

}

const handleDeleteToDo = async function(req, res){
    const {_id} = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully."))
    .catch((err)=> console.log(err));
}

module.exports = {
    handleGetToDo,
    handleSaveToDo,
    handleUpdateToDo,
    handleDeleteToDo
}
