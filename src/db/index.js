module.exports = {
    dbUsers: [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            phone: '123-456-7890',
            profile: 1
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane.doe@gmail.com',
            phone: '098-765-4321',
            profile: 2
        }
    ],

    dbOrders: [
        {
            id: 1,
            userId: 1,
            itemId: [1,2],
            total: 100,
        },
        {
            id: 2,
            userId: 1,
            itemId: [3,4],
            total: 120,
        },
        {
            id: 3,
            userId: 2,
            itemId: [5,6],
            total: 200,
        }
    ],

    dbItems: [
        {
            id: 1,
            description: 'T-Shirt',
            price: 100,
        },
        {
            id: 2,
            description: 'Pants',
            price: 400,
        },
        {
            id: 3,
            description: 'Shoes',
            price: 200,
        },
        {
            id: 4,
            description: 'Hat',
            price: 50,
        },
        {
            id: 5,
            description: 'Dress',
            price: 300,
        },
        {
            id: 6,
            description: 'Skirt',
            price: 100,
        }
    ],

    dbProfiles: [
        {
            id: 1,
            description: 'ADMIN'
        },
        {
            id: 2,
            description: 'USER'
        }
    ]
}