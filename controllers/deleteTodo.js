const Todo = require("../models/Todo");

exports.deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Todo Deleted!"
        })
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success: false,
            error: e.message,
            message: "server error"  
        });
    }
}