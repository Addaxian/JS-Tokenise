function tokenise(expression) {
    expression.toString().replace(/\s+/g, "");
    const str = expression.toString().split("");
  
    const result = [];
    let letterBuffer = [],
      numberBuffer = [],
      comparatorBuffer = [];
  
    str.forEach((char) => {
      if (isDigit(char)) {
        numberBuffer.push(char);
      } else if (char === ".") {
        numberBuffer.push(char);
      } else if (isComparator(char)) {
        if (numberBuffer.length) {
          emptyNumberBufferAsLiteral();
        }
        comparatorBuffer.push(char);
      } else if (isLetter(char)) {
        if (numberBuffer.length) {
          emptyNumberBufferAsLiteral();
          result.push(new Token("Operator", "*"));
        }
        if (comparatorBuffer.length) {
          emptyComparatorBufferAsComparator();
          result.push(new Token("Operator", "*"));
        }
        letterBuffer.push(char);
      } else if (isOperator(char)) {
        emptyNumberBufferAsLiteral();
        emptyComparatorBufferAsComparator();
        emptyLetterBufferAsVariables();
        result.push(new Token("Operator", char));
      } else if (isLeftParenthesis(char)) {
        if (letterBuffer.length) {
          result.push(new Token("Function", letterBuffer.join("")));
          letterBuffer = [];
        } else if (numberBuffer.length) {
          emptyNumberBufferAsLiteral();
          emptyComparatorBufferAsComparator();
          result.push(new Token("Operator", "*"));
        }
        result.push(new Token("Left Parenthesis", char));
      } else if (isRightParenthesis(char)) {
        emptyLetterBufferAsVariables();
        emptyNumberBufferAsLiteral();
        emptyComparatorBufferAsComparator();
        result.push(new Token("Right Parenthesis", char));
      } else if (isComma(char)) {
        emptyNumberBufferAsLiteral();
        emptyComparatorBufferAsComparator();
        emptyLetterBufferAsVariables();
        result.push(new Token("Function Argument Separator", char));
      }
    });
    if (numberBuffer.length) {
      emptyNumberBufferAsLiteral();
    }
    if (comparatorBuffer.length) {
      emptyComparatorBufferAsComparator();
    }
    if (letterBuffer.length) {
      emptyLetterBufferAsVariables();
    }
    return result;
  
    function emptyLetterBufferAsVariables() {
      const l = letterBuffer.length;
      for (let i = 0; i < l; i++) {
        result.push(new Token("Variable", letterBuffer[i]));
        if (i < l - 1) {
          result.push(new Token("Operator", "*"));
        }
      }
      letterBuffer = [];
    }
  
    function emptyNumberBufferAsLiteral() {
      if (numberBuffer.length) {
        result.push(new Token("Literal", numberBuffer.join("")));
        numberBuffer = [];
      }
    }
  
    function emptyComparatorBufferAsComparator() {
      if (comparatorBuffer.length) {
        result.push(new Token("Comparator", comparatorBuffer.join("")));
        comparatorBuffer = [];
      }
    }
  }

  function Token(type, value) {
    this.type = type;
    this.value = value;
  }
  
  function isComma(ch) {
    return /,/.test(ch);
  }
  
  function isDigit(ch) {
    return /\d/.test(ch);
  }
  
  function isLetter(ch) {
    return /[a-z]/i.test(ch);
  }
  
  function isOperator(ch) {
    return /\+|-|\*|\/|\^/.test(ch);
  }
  
  function isComparator(ch) {
    return />|<|!|=/.test(ch);
  }
  
  function isLeftParenthesis(ch) {
    return /\(/.test(ch);
  }
  
  function isRightParenthesis(ch) {
    return /\)/.test(ch);
  }
  
  function test(expression) {
    const tokens = tokenise(expression);
    tokens.forEach((token, index) => {
      console.log(index + "=> " + token.type + "[ " + token.value + " ]");
    });
  }

  test("22cos(60) + 3.1x/7")