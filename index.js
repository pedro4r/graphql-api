const {gql, ApolloServer} = require ("apollo-server")

const dbUsers = [
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
]

const dbOrders = [
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
]

const dbItems = [
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
]

const profiles = [
    {
        id: 1,
        description: 'ADMIN'
    },
    {
        id: 2,
        description: 'USER'
    }
]

const typeDefs = gql`

    enum ProfileDescriptions {
        ADMIN 
        USER
    }

    type User {
        id: Int
        name: String
        email: String
        phone: String
        profile: Profile
        orders: [Order]
    }

    type Profile {
        id: Int
        description: ProfileDescriptions
    }

    type Order {
        id: Int
        userId: Int
        items: [Item]
        total: Int
        user: User
    }

    type Item {
        id: Int,
        description: String,
        price: Int,
    }

    type Query {
        user(id: Int): User
        profiles: [Profile]
        orders(userId: Int): [Order]
    }
`

const resolvers = {
    User: {
        profile(user) {
            return profiles.find(profile => profile.id === user.profile)
        },
        orders(user) {
            return dbOrders.filter(order => order.userId === user.id);
        }
    },
    Order: {
        user(order) {
            return dbUsers.find(user => user.id === order.userId);
        },
        items(order) {
            return dbItems.filter(item => order.itemId.includes(item.id));
        }
    },
    Query: {
        user(_,args) {
            const {id} = args
            return dbUsers.find(user => user.id === id);
        },  
        orders(_, args) {
            const { userId } = args;
            if (userId) {
                return dbOrders.filter(order => order.userId === userId)
            }
            else {
                return dbOrders;
            }
 
        },
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()