function activeState(value) {
  if (value === 'metric') {
    document.querySelector('.degreeF').classList.remove('degree_active');
    document.querySelector('.degreeC').classList.add('degree_active');
  } else {
    document.querySelector('.degreeF').classList.add('degree_active');
    document.querySelector('.degreeC').classList.remove('degree_active');
  }
}

module.exports = {
  activeState,
};
