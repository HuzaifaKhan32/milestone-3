

import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-12-29',
});


// Function to import data into Sanity
async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await axios.get(' https://template6-six.vercel.app/api/products');
    const products = response.data;

    console.log(`Fetched ${products.length} products`);

    if (!Array.isArray(products) || products.length === 0) {
      console.log('No products found in the response!');
      return;
    }

    for (const product of products) {
      console.log(`Processing product: ${product.name}`);


      // Prepare the Sanity document for the product
      const sanityProduct = {
        _type: 'product', // Matches your Sanity schema
        id: product.id, // Assuming the API provides a unique ID
        name: product.name,
        title: product.title,
        price: product.price,
        description: product.description || '', // Fallback to empty string if missing
        dicountPercentage: product.dicountPercentage || 0, // Default to 0 if not provided
        productImage: product.imageUrl,
        isNew: product.isNew || false,
        tags: product.tags
      };

      console.log('Uploading product to Sanity:', sanityProduct.title);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error.message);
  }
}

// Call the import function to start the process
importData();






