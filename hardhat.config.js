require('@nomiclabs/hardhat-waffle');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.4',
	networks: {
		rinkeby: {
			url: 'https://eth-rinkeby.alchemyapi.io/v2/PKA9i4aS-wLWXWbGzPautGZKT1qwDkoB',
			accounts: [
				'd2d8829bbed93d516da0743c80b85cdb6450e4bfa4ffdd8e881bb6a341a48c4e',
			],
		},
	},
};
