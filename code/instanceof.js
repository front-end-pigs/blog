function newInstanceOf(leftValue, rightValue) {
  const rightProto = rightValue.prototype;
  let leftProto = leftValue.__proto__;
  while (true) {
    if (leftValue === null) {
      return false;
    }
    if (leftProto === rightProto) {
      return true;
    }
    // 可能是多层继承
    leftProto = leftProto.__proto__;
  }
}
