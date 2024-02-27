const {Router} = require("express");
const { handleGetToDo, handleSaveToDo, handleDeleteToDo, handleUpdateToDo } = require("../controllers/ToDoController");

const router = Router();

router.get('/', handleGetToDo);
router.post('/save',handleSaveToDo);
router.post('/update',handleUpdateToDo);
router.post('/delete', handleDeleteToDo);

module.exports = router;