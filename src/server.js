const app = require("./index");
const port = 5454;

app.listen(port, () => {
    console.log(
      `Big Sale - eCommerce backend listening at http://localhost:${port}`
    );
  });