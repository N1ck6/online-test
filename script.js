console.log("Starting the application...");

const apiKey = process.env.APIKEY;

if (apiKey) {
  console.log("APIKEY is:", apiKey);
} else {
  console.log("No APIKEY provided.");
}

console.log("Application finished.");
