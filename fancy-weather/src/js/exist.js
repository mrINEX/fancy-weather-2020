function exist(value) {
  const isExist = document.querySelector(value);
  if (isExist) { isExist.remove(); }
}

module.exports = {
  exist,
};
