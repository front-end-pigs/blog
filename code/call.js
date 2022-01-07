Function.prototype.call2 = function(context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  // 从第二个参数开始
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  // var arr = [1, 2, 3, 4];
  // arr.toString() ====> '1, 2, 3, 4'
  var result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
}
