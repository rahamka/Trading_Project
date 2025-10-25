function hideCreditCard(cardNum) {
  cardNum = cardNum.toString();
  // I convert cardNum toString but before in which condition it was?
  let value = "";
  for (let i = 0; i <= 11; i++) {
    value += cardNum[i];
  }
  value += "****";
  console.log(value);
}

hideCreditCard("rahamkalhoro1280");
