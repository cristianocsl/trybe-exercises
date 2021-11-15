module.exports = (err, _req, res, _netx) => {
  if (err.isJoi) return res.status(400).json({
    error: {
      message: err.details[0].message
    }
  });
  // Verificamos se esse é um erro de domínio
  if (err.code) {
    const statusByErrorCode = { notFound: 404 }
    
      const status = statusByErrorCode[err.code] || 500;
    
      res.status(status).json(err);
  };
  console.error(err);
  res.status(500).json({
    error: {
      code: 'internal',
      message: 'Internal server error',
    }
  })
}