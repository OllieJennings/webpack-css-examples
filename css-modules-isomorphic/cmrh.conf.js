var name = (process.env.NODE_ENV === 'production') ? '[hash:base64:1]_[hash:base64:5]' : '[name]__[local]___[hash:base64:5]';

module.exports = {
  generateScopedName: name,
};
