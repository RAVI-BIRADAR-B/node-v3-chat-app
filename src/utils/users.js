const users = [];
//remove users
const removeUser = (id)=>{
    const index = users.findIndex(user=>{
        return user.id===id
    })
    if(index!==-1){
        return users.splice(index,1)[0]
    }
}
//addUser, removeUser, editUser,getUser
const addUser = ({ id, username, room }) => {
    //Clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username||!room){
        return{
            error:'Username and room are required!'
        }
    }

    //check for existing user

    const existingUser = users.find((user)=>{
        return user.room===room && user.username===username
    })
    if(existingUser){
        return{
            error:'Username is in use!'
        }
    }
    const user = {id,username,room}
    users.push(user )
    return {user}
};

addUser({
    id:22,
    username:'Andrew',
    room:'South'
})
console.log(users)

const getUser = (id)=>{
     const userIndex = users.findIndex(user=>user.id===id)
     if(userIndex===-1){
         return {error:'No user Found'}
     }
   return users[userIndex]
}
const getUsersInRoom = (room)=>{
    return  users.filter((user)=>user.room.trim().toLowerCase()===room.trim().toLowerCase())
   
}
module.exports = { addUser,removeUser,getUsersInRoom,getUser}