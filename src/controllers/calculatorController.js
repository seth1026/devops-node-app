exports.calculate = (req, res) => {
  const { num1, num2, op } = req.body;

  const a = parseFloat(num1);
  const b = parseFloat(num2);

  let result;

  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : "Error"; break;
    default: result = "Invalid";
  }

  res.json({ result });
};