import dbConnect from "../../../utils/db";
import Note from "../../../models/Note";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  if (method === "GET") {
    try {
      const notes = await Note.find({});
      res.status(200).json({ success: true, data: notes });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server Error" });
    }
  } else if (method === "POST") {
    try {
      const note = await Note.create(req.body);
      res.status(200).json({ success: true, data: note });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(400).json({ success: false, message: "Method not allowed" });
  }
};
