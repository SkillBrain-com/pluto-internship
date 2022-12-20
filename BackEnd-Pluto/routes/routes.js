const router = require("express").Router();
const UserModel = require('../models/usersModel')
const TaskModel = require('../models/tasksModel')

router.post('/user', async (req, res)=>{
    console.log(req);
    const user = new UserModel({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        pic: req.body.pic,
    });
    const userInserted = await user.save();
    return res.sendStatus(201).json(userInserted);
})

router.get('/user', async (req, res)=>{
    UserModel.find().then((result) => {
        return res.json(result);
    })
})

router.get('/user/:id', async (req, res)=>{
    UserModel.findById(req.params.id).then((result) => {
        return res.json(result);
    })
})


router.post('/task', async (req, res)=>{
    const card = new TaskModel({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        assignedBy: req.body.assignedBy,
        assigned: req.body.assigned,
    });
    const TaskInserted = await card.save();
    return res.sendStatus(201).json(TaskInserted);
})

router.get('/task', async (req, res)=>{
    TaskModel.find().then((result) => {
        return res.json(result);
    })
})

router.get('/task/:id', async (req, res)=>{
    TaskModel.findById(req.params.id).then((result) => {
        return res.json(result);
    })
})

module.exports = router;