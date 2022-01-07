const diceNumberGenerator = (n: number) => {
  return Math.floor(Math.random() * n + 1);
};

export default diceNumberGenerator;