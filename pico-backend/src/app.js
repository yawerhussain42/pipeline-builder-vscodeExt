const express = require("express");
const bodyParser = require("body-parser");
const corsMiddleware = require("./middleware/cors");
const routes = require("./routes");
const app = express();

app.use(corsMiddleware);

app.use(bodyParser.json({ limit: "500mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "500mb",
    parameterLimit: 50000,
  })
);

// Set EJS as the template engine and specify the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Replace "views" with your actual views directory

app.use("/api", routes);

const port = process.env.PORT || 8123;
const ip = process.env.IP || "0.0.0.0";

const server = app.listen(port, () => {
  console.log(`Server is running on http://${ip}:${port}`);
});

module.exports = server; // Export the server instance for testing or other purposes.
