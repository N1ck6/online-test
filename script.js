import config from './env.js';

const apikey = config.APIKEY;
const appid = config.APPID;
const authdomain = config.AUTHDOMAIN;
const databaseurl = config.DATABASEURL;
const messagingsenderid = config.MESSAGINGSENDERID;
const projectid = config.PROJECTID;
const storagebucket = config.STORAGEBUCKET;

console.log(apikey, appid, authdomain, databaseurl, messagingsenderid, projectid, storagebucket);
