const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

// Routes
const mainRoute = require("./routes/main.Routes")
app.use("/", mainRoute)

app.listen(PORT, () =>
  console.log(`Server up on port http://localhost:${PORT}`),
)
