const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`سرور من روشن است! 🟢<br>زمان: ${new Date()}`);
});

app.listen(3000, () => {
  console.log('سرور روی پورت 3000 روشن شد');
});
