const Todo = require("../models/Todo");

exports.createTodo = async(req,res) => {
    try {
        const {title, description} = req.body;
        const response = await Todo.create({title, description});
        res.status(200).json(
            {
                success: true,
                data:response,
                message: "Entry Created Successfully"
            }
        )
    }
    catch(e){
        console.error(e);
        console.log(e);
        res.status(500).json(
            {
                success: false,
                data: 'Internal server Error',
                message: e.message
            }
        )
    }
}