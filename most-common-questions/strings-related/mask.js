function maskCardNumber(cardNumber, unmaskedStart = 4, unmaskedEnd = 4) {
  if (!cardNumber || cardNumber.length <= unmaskedStart + unmaskedEnd) {
    return cardNumber;
  }

  const start = cardNumber.slice(0, unmaskedStart);
  const end = cardNumber.slice(cardNumber.length - unmaskedEnd);

  const masked = '*'.repeat(cardNumber.length - (unmaskedStart + unmaskedEnd));
  console.log(`${start}${masked}${end}`);
}
maskCardNumber('4111111111111111');
