
const Token = artifacts.require('Token');
const {
    TOKEN_DECIMALS, 
    TOKEN_NAME, 
    TOKEN_SYMBOL, 
    TOKEN_TOTAL_SUPPLY, 
} = process.env;

module.exports = async function(deployer) {
    await deployer.deploy(
        Token, 
        TOKEN_NAME, 
        TOKEN_SYMBOL, 
        TOKEN_TOTAL_SUPPLY, 
        TOKEN_DECIMALS, 
        { overwrite: false }
    );
}
