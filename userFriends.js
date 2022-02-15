const users=require("./userDetails.json")

function findFriend(userName){
    if(typeof userName != 'string')
    return `invalid input`;

    const user=users.find(user=>user.name===userName)
    if(user===null){
        return `user not found`
    }
    const friends=user.friends;
    const friendsName= friends.map(friends=>friends.name)
    if(friendsName.length===0){
    return `this user has no friends`
    }
    return friendsName
}
console.log(findFriend("Barton Mckee"))
