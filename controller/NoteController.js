import Notes from "../model/Notes.js";

export const getAllNote = async (req, res) => {
  try {
    const result = await Notes.find({user:req.user.user._id});
    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const getOneNote = async (req, res) => {
  try {
    const result = await Notes.findById(req.params.id);
    res.status(200).json({ result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const PostNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const result = await Notes.create({
      title: title,
      description: description,
      user:req.user.user._id
    });
    res.status(200).json({ success: true, result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const UpdateNote = async (req, res) => {
  try {
    const result = await Notes.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title:req.body.title,
          description:req.body.description
        },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: "note deleted", result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const DeleteOneNote = async (req, res) => {
  try {
    const result = await Notes.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, result: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
