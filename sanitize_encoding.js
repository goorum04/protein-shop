const fs = require('fs');
function escapeNonAscii(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const escaped = content.replace(/[^\x00-\x7F]/g, char => {
    return '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0');
  });
  fs.writeFileSync(filePath, escaped, 'utf8');
}
escapeNonAscii('shared.js');
escapeNonAscii('products.js');
escapeNonAscii('shopify.js');
