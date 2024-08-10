var isVaild = function (s) {
  let stack = [];
  s.split("").forEach(el => {
    stack.unshift(el);
    if (stack[1] == "(" && el == ")") {
      stack.shift();
      stack.shift();
    }

    if (stack[1] == "{" && el == "}") {
      stack.shift();
      stack.shift();
    }

    if (stack[1] == "[" && el == "]") {
      stack.shift();
      stack.shift();
    }

    if (stack[1] == "<" && el == ">") {
      stack.shift();
      stack.shift();
    }
  });
  if (stack.length != 0) {
    return false;
  } else return true;
};

console.log(isVaild("()"), "==isVaild==");
console.log(isVaild("()[]{}"), "==isVaild==");
console.log(isVaild("(]"), "==isVaild==");
