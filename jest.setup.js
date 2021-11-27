import 'core-js';
import AWS from 'aws-sdk';
import dotEnv from 'dotenv';
import 'regenerator-runtime/runtime';

dotEnv.config({ path: '.env' });

const OLD_ENV = process.env;
beforeEach(() => {
	jest.clearAllMocks();
	jest.resetAllMocks();
	jest.resetModules();
	process.env = {
		...OLD_ENV,
		REGION: 'ap-south-1',
	};
});
