import express from 'express';
import userRouter from './routes/user.route.js'
import commentRouter from './routes/comment.route.js'
import postRouter from './routes/post.route.js'
import connectDB from "./lib/connectDB.js";
import 'dotenv/config'

const app = express();

// app.get("/test", (req, res) => {
//     res.status(200).send("it works!");
// })

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);


app.listen(3000, () => {
    connectDB();
    console.log('Server started on port 3000!');
});