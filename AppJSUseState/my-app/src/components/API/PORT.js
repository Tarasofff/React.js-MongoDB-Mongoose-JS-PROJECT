//PORTS
const PORT = {
    MongoDBPORT: 5000,
    GraphQLPORT: 4005,
}

//Object for comfortable work with url
export const url = {
    MongoDB: `http://localhost:${PORT.MongoDBPORT}`,
    MongoDBPost: `http://localhost:${PORT.MongoDBPORT}/post`,
    MongoDBGet: `http://localhost:${PORT.MongoDBPORT}/get`,
    MongoDBDelete: `http://localhost:${PORT.MongoDBPORT}/delete`,
    MongoDBUpdate: `http://localhost:${PORT.MongoDBPORT}/update`,
}
