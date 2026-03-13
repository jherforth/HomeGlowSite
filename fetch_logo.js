const https = require('https');
https.get('https://homeglow.dev', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/<img[^>]+src="([^">]+logo[^">]+)"/i);
    if (match) {
      console.log('Logo URL:', match[1]);
    } else {
      const match2 = data.match(/<img[^>]+src="([^">]+)"/g);
      console.log('Other images:', match2);
    }
  });
});
