const express = require('express');
const router = require('./router/user.router');
const app = express();
const PORT = process.env.PORT || 3000;
import errorHandlers from "./middleware/errorHandlers";
app.use(errorHandlers.applicationError);
app.use(express.json());
app.use('/api',router);
app.listen(PORT,()=> {console.log(`Server started on port ${PORT}`);});


