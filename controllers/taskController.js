const createTasks = (req,res)=>{
    res.status(200).json({message: 'create task route working'})
}

const getTasks = (req,res)=>{
    res.status(200).json({message: 'get task route working'})
}

const updateTask = (req,res)=>{
    res.status(200).json({message: 'update task route working'})
}

const deleteTask = (req,res)=>{
    res.status(200).json({message: 'delete task route working'})
}

export {createTasks , getTasks , updateTask , deleteTask}