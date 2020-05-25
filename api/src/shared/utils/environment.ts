import * as dotenv from 'dotenv';

dotenv.config();
const path = `${__dirname}/../../../.env`;

dotenv.config({ path });

const { AUTH_SECRET } = process.env;

export default AUTH_SECRET;
