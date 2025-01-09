const db = require('../../../db');

module.exports = {
    Order: {
        user(order) {
            return db.dbUsers.find(user => user.id === order.userId);
        },
        items(order) {
            return db.dbItems.filter(item => order.itemId.includes(item.id));
        }
    },
    Query: {
        orders(_, args) {
            const { userId } = args;
            if (userId) {
                return db.dbOrders.filter(order => order.userId === userId)
            }
            else {
                return db.dbOrders;
            }
 
        },
    }
}