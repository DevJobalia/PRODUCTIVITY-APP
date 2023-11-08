import mongoose from "mongoose";

const Post = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  tags: { type: [String] },
});

const TodoTaskSchema = mongoose.model("TodoTask", Post);

export default TodoTaskSchema;
