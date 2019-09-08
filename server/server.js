const express = require('express');
const path = require('path');
const compression = require('compression');
const port = process.env.PORT || 3000;
const app = express();
app.use(compression());
app.use('/restaurants/:rid', express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
