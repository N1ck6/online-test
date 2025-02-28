const config = {
  APIKEY: process.env.APIKEY || "your-api-key-here",
  APPID: process.env.APPID || "your-app-id-here",
  AUTHDOMAIN: process.env.AUTHDOMAIN || "your-auth-domain-here",
  DATABASEURL: process.env.DATABASEURL || "your-database-url-here",
  MESSAGINGSENDERID: process.env.MESSAGINGSENDERID || "your-messaging-sender-id-here",
  PROJECTID: process.env.PROJECTID || "your-project-id-here",
  STORAGEBUCKET: process.env.STORAGEBUCKET || "your-storage-bucket-here",
};

console.log(config);
