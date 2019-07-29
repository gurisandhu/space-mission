module.exports = {
	plugins: ['react-hooks'],
	extends: ['@deloitte-digital-au/eslint-config-react'],
	parser: 'babel-eslint',
	env: {
		node: true,
	},
	rules: {
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'react/no-did-mount-set-state': 0,
		'no-debugger': 1,
	},
};
