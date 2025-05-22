import { Client, Databases, ID } from "appwrite";

// Initialize client
const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68175c2000254e7a5283");

// Create database instance
const databases = new Databases(client);

// Export client & databases for use in your app
export { client, databases, ID };
