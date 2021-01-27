import app from "./app.js";
import { connect } from "./database/db.js";

// Default Ports
const PORT = process.env.PORT || 3000;

// DB url
const dburl =
    process.env.DB ||
    "mongodb+srv://classinpocket:classinpocket123@cluster0.rl3vm.mongodb.net/test?retryWrites=true&w=majority";

// initiailze db
await connect(dburl);

// Start server on default port or in custom port
app.listen(PORT, () => {
    console.log(`Database is started`);
    console.log(`Server is running on PORT: ${PORT}`);
});
