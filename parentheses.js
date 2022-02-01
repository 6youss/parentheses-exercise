const map = {
    "(": ")",
    "[": "]",
    "{": "}"
};

function isValidParentheses(str) {
  const stack = [];
  
  for (const char of str) {
    if (isOpeningChar(char)) {
      stack.push(char);
      continue;
    }

    if (map[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
}

function isOpeningChar(char) {
  return Object.keys(map).includes(char);
}

console.log(isValidParentheses("((()))[]"));
