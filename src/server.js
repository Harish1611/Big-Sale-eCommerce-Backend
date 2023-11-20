const app = require("./index");
const {connectDB} = require("./config/db")
const port = 5454;


app.listen(port, async () => {

    await connectDB();

    console.log(
      `Big Sale - eCommerce backend listening at http://localhost:${port}`
    );
  });