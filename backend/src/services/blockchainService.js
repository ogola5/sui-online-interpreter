//Interactions with Sui SDK
const { SuiClient } = require('@mysten/sui.js'); // assuming this is the correct import

// Create a new instance of the Sui client
const client = new SuiClient('http://your-sui-node-url:port');

exports.getObjectById  = async function (objectId) {
    try {
        return await client.getObject(objectId);

    }catch (error) {
        console.error('Failed to fetch object:',error);
        throw error;
    }
}
// functions to compile Move code
exports.compile = async (code) =>{
    //Placeholder: actual compilation logic using Sui SDK

    return { compiledCode: "Compiled version of the code"};

}

// functions to execute Move code
exports.execute = async (code,args) =>{
    //Placeholder: actual execution logic using Sui SDK

    return { result: "Result of the execution", logs:[]};

}