const createUser = (req ,res)=>{
    res.status(200).json({message : 'route working'})
}
const updateUser = (req, res)=>{
    res.status(200).json({message : 'user updated'})
}
const deleteUser = (req, res)=>{
    res.status(200).json({message : 'user delete'})
}
const loginUser = (req, res)=>{
    res.status(200).json({message : 'user profile'})
}
export {createUser , updateUser , deleteUser , loginUser}