export default async function handler(request, response) {
  try {
    const { query, variables } = request.body;
    
    const shopifyResponse = await fetch('https://0bb404-4.myshopify.com/api/2024-10/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Shopify-Storefront-Private-Token': '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'
      },
      body: JSON.stringify({ query, variables })
    });

    const data = await shopifyResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
