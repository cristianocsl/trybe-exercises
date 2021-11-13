module.exports = (err, req, res, _next) => {
  // Caso o erro possua uma propriedade `status`, devolvemos esse status, juntamente com a mensagem do erro.
  if (err.status) return res.status(err.status).json({ message: err.message });

  if (err.isJoi) return res.status(400).json({ message: err.details[0].message });

  console.error(err);
  res.status(500).json({ message: 'Erro interno do servidor' });
};
