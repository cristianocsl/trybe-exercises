module.exports = (err, req, res, _netx) => {
  if (err.isJoi) return res.status(400).json({
    error: {
      message: err.details[0].message
    }
  });
  // Verificamos se esse é um erro de domínio
  
}