import Kid from "../models/Kid.js";

export const addKid = async (req, res) => {
  const { name, age, notes } = req.body;

  const kid = await Kid.create({
    parentId: req.user,
    name,
    age,
    notes
  });

  res.json(kid);
};

export const listKids = async (req, res) => {
  const kids = await Kid.find({ parentId: req.user });
  res.json(kids);
};
