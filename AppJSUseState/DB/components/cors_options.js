const PORT = 3006

//Another options
module.exports = {
    origin:`http://localhost:${PORT}`,
    credentials:true,  //access-control-allow-credentials:true
    optionSuccessStatus:200
}
