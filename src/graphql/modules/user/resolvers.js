const db = require('../../../db');

function idGenerator(list){
    let newId
    let lastItemOfList = list[list.length - 1]
    if(!lastItemOfList) {
        newId = 0
    }
    else{
        newId = lastItemOfList.id
    }

    return ++newId
}

module.exports = {
    User: {
        profile(user) {
            return db.dbProfiles.find(profile => profile.id === user.profile)
        },
        orders(user) {
            return db.dbOrders.filter(order => order.userId === user.id);
        }
    },
    Query: {
        user(_,args) {
            const {id} = args
            return db.dbUsers.find(user => user.id === id);
        }, 
    },

    Mutation: {
        createUser(_,args) {
            const newUser = {
                ...args,
                id: idGenerator(db.dbUsers),
                profile: 1
            }
            db.dbUsers.push(newUser)
            return newUser
        }
    }
}