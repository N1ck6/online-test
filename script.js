console.log("Starting the application...");

const apiKey = process.env.APIKEY;

if (apiKey) {
  // The API key comes from the GitHub secret and is injected as an environment variable.
  console.log("APIKEY is:", apiKey);
} else {
  console.log("No APIKEY provided.");
}

console.log("Application finished.");
