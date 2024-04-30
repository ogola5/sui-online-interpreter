//Logic for handling requests
const blockchainService = require('../services/blockchainService');

// Controller for compiling Move code
exports.compileMoveCode  =async (req, res) =>{
    try{
        const { code } = req.body;
        const result = await blockchainService.compileMoveCode(code);
        res.json({ success: true, result });
    }catch (error) {
        res.status(500).json({ success: false, message: error.message});
    }
};

// Controller for executing Move code
exports.executeMoveCode = async(req, res) =>{
    try{
        const { code } = req.body;
        const result = await blockchainService.executeMoveCode(code);
        res.json({ success: true, result });
    }catch (error) {
        res.status(500).json({ success: false, message: error.message});
    }
}