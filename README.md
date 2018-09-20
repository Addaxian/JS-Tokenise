# JS-Tokenise
Utility code to tokenise expressions and return the components in an array of tokens.

Example/Test:
  function test(expression) {
    const tokens = tokenise(expression);
    tokens.forEach((token, index) => {
      console.log(index + "=> " + token.type + "[ " + token.value + " ]");
    });
  }

test("<=7") will return
    0=> Literal[ 7 ]
    1=> Comparator[ <= ]

test("89sin(45) + 2.2x/7") will return
    0=> Literal[ 22 ]
    1=> Operator[ * ]
    2=> Function[ cos ]
    3=> Left Parenthesis[ ( ]
    4=> Literal[ 60 ]
    5=> Right Parenthesis[ ) ]
    6=> Operator[ + ]
    7=> Literal[ 3.1 ]
    8=> Operator[ * ]
    9=> Variable[ x ]
    10=> Operator[ / ]
    11=> Literal[ 7 ]
