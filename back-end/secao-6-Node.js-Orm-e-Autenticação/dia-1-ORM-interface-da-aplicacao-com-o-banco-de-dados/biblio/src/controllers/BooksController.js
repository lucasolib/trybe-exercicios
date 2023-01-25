const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const book = await BookService.getById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.create({ title, author, pageQuantity });

  res.status(201).json(book);
};

const update = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;
  const updateBook = await BookService.update(id, { title, author, pageQuantity });
  if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });
  return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
};

const remove = async (req, res) => {
  const { id } = req.params;
  const removedBook = await BookService.remove(id);
  if (!removedBook) return res.status(404).json({ message: 'Livro não encontrado' });
  return res.status(200).json({ message:  'Livro excluido com sucesso' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};