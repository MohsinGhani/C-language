<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lab One</title>
</head>

<body>
    <textarea rows="10" cols="50" id="code" name="code">
        #include<stdio.h>
        void main()
        {
            int a,b,c;
            int number = 70;
            printf("Enter");
            while()
                a=b+c;
            c=a; 
        }
    </textarea>
    <button type="button" onclick="tokenze()">Tokenize</button>
    <div>
        <ul id="token"></ul>
    </div>
    <script>
        var input;
        function tokenze() {
            input = document.getElementById("code").value
            input = input.trim('/\r?\n|\r/')
            parse(input);
        }

        // Parsing the input STRING. 
        function parse(str) {
            var left = 0, right = 0;
            var len = str.length;
            var tokens = convertStringToTokens(str);
            var ul = document.getElementById('token')
            ul.innerHTML = ""
            // console.log('tokens', tokens)
            tokens.forEach((tocken, index) => {
                tocken = tocken.trim('/\r?\n|\r/')
                if (isDataType(tocken)) {
                    var li=document.createElement('li');
                    li.innerText = `${tocken} = Data Type`
                    ul.appendChild(li);
                    console.log(`${tocken} = Data Type`)
                }
                else if (isIdentifier(tocken)) {
                    var li=document.createElement('li');
                    li.innerText = `${tocken} = Identifier`
                    ul.appendChild(li);
                    console.log(`${tocken} = Identifier`)
                }
                else if (isOperator(tocken)) {
                    var li=document.createElement('li');
                    li.innerText = `${tocken} = Operator`
                    ul.appendChild(li);
                    console.log(`${tocken} = Operator`)
                }
                else if (isInteger(tocken)) {
                    var li=document.createElement('li');
                    li.innerText = `${tocken} = Constant`
                    ul.appendChild(li);
                    console.log(`${tocken} = Constant`)
                }
                else if (isKeyword(tocken)) {
                    var li=document.createElement('li');
                    li.innerText = `${tocken} = Keyword`
                    ul.appendChild(li);
                    console.log(`${tocken} = Keyword`)
                }
                else if (tocken == ',') {
                    var li=document.createElement('li');
                    li.innerText = `${tocken} = Seperator`
                    ul.appendChild(li);
                    console.log(`${tocken} = Seperator`)
                }
                else if (tocken == ';') {
                    var li=document.createElement('li');
                    li.innerText = `${tocken} = Terminater`
                    ul.appendChild(li);
                    console.log(`${tocken} = Terminater`)
                }
                else if (tocken == '#include') {
                    var li=document.createElement('li');
                    li.innerText = `${tocken}<${tokens[index + 1]}> = Header File`
                    ul.appendChild(li);
                    console.log(`${tocken}<${tokens[index + 1]}> = Header File`)
                    tokens.splice(index + 1, 2)
                }
                else if (tocken == '--param--') {
                    var li=document.createElement('li');
                    li.innerText = `${tokens[index + 1]} = Param`
                    ul.appendChild(li);
                    console.log(`${tokens[index + 1]} = Param`)
                    tokens.splice(index + 1, 1)
                }
                else if (tocken == '' || tocken == ' ' || tocken == '(' || tocken == ')' || tocken == '{' || tocken == '}') {
                }
                else {
                    var li=document.createElement('li');
                    li.innerText = `${tocken} = Invalid`
                    ul.appendChild(li);
                    console.log(`${tocken} Invalid`)
                }
            })
        }

        // Returns 'true' if the character is an OPERATOR. 
        function isOperator(ch) {
            if (ch == '+' || ch == '-' || ch == '*' ||
                ch == '/' || ch == '>' || ch == '<' ||
                ch == '=') {
                return (true);
            }
            return (false);
        }

        // Returns 'true' if the string is a KEYWORD. 
        function isKeyword(str) {
            if ((str == "if") || (str == "else") ||
                (str == "while") || (str == "do") ||
                (str == "break") ||
                (str == "continue") || (str == "int")
                || (str == "double") || (str == "float")
                || (str == "return") || (str == "char")
                || (str == "case") || (str == "char")
                || (str == "sizeof") || (str == "long")
                || (str == "short") || (str == "typedef")
                || (str == "switch") || (str == "unsigned")
                || (str == "void") || (str == "static")
                || (str == "struct") || (str == "goto")) {

                return (true);
            }

            return (false);
        }

        // Returns 'true' if the string is a Data type. 
        function isDataType(tocken) {
            switch (tocken) {
                case 'int':
                    return true
                case 'double':
                    return true
                case 'float':
                    return true
                case 'char':
                    return true
                case 'long':
                    return true
                case 'short':
                    return true
                default:
                    return false
            }
        }

        // Returns 'true' if the string is a Data type. 
        function isIdentifier(token) {
            var isValid = []
            var tokenArr = token.split('')
            tokenArr.forEach((char, i) => {
                switch (char) {
                    case 'a':
                    case 'b':
                    case 'c':
                    case 'd':
                    case 'e':
                    case 'f':
                    case 'g':
                    case 'h':
                    case 'i':
                    case 'j':
                    case 'k':
                    case 'l':
                    case 'm':
                    case 'n':
                    case 'o':
                    case 'p':
                    case 'q':
                    case 'r':
                    case 's':
                    case 't':
                    case 'u':
                    case 'v':
                    case 'w':
                    case 'x':
                    case 'y':
                    case 'z':
                    case 'A':
                    case 'B':
                    case 'C':
                    case 'D':
                    case 'E':
                    case 'F':
                    case 'G':
                    case 'H':
                    case 'I':
                    case 'J':
                    case 'K':
                    case 'L':
                    case 'M':
                    case 'N':
                    case 'O':
                    case 'P':
                    case 'Q':
                    case 'R':
                    case 'S':
                    case 'T':
                    case 'U':
                    case 'V':
                    case 'W':
                    case 'X':
                    case 'Y':
                    case 'Z':
                        isValid.push(1)
                        break;
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        if (i > 0) {
                            isValid.push(1)
                        } else {
                            isValid.push(0)
                            return false
                        }
                        break;
                    default:
                        isValid.push(0)
                }
            })
            if (isOperator(token) || token == ';' || token == '' || isInteger(token) || isKeyword(token)) {
                return false
            }
            let flag = true
            isValid.forEach((item, i) => {
                if (item != 1) {
                    flag = false
                }
            })
            return flag
        }

        // Returns 'true' if the string is an INTEGER. 
        function isInteger(str) {
            var i, len = str.length;
            str = str.split('')
            if (len == 0)
                return (false);
            for (i = 0; i < len; i++) {
                if (str[i] != '0' && str[i] != '1' && str[i] != '2'
                    && str[i] != '3' && str[i] != '4' && str[i] != '5'
                    && str[i] != '6' && str[i] != '7' && str[i] != '8'
                    && str[i] != '9' || (str[i] == '-' && i > 0))
                    return (false);
            }
            return (true);
        }

        // Returns 'true' if the string is a REAL NUMBER. 
        function isRealNumber(str) {
            var i, len = str.length;
            var hasDecimal = false;

            if (len == 0)
                return (false);
            for (i = 0; i < len; i++) {
                if (str[i] != '0' && str[i] != '1' && str[i] != '2'
                    && str[i] != '3' && str[i] != '4' && str[i] != '5'
                    && str[i] != '6' && str[i] != '7' && str[i] != '8'
                    && str[i] != '9' && str[i] != '.' ||
                    (str[i] == '-' && i > 0))
                    return (false);
                if (str[i] == '.')
                    hasDecimal = true;
            }
            return (hasDecimal);
        }

        // Extracts the SUBSTRING. 
        function convertStringToTokens(str) {
            str = str.split('')
            var tokens = []
            var tokensIndex = 0
            var currentTocken = ''
            str.forEach((item, i) => {
                if (item != ' ' && item != ';' && item != '=' && item != ',' && item != '#' && item != '(') {
                    currentTocken = currentTocken.concat(item)
                }
                else if (item == ";") {
                    tokens[tokensIndex] = currentTocken
                    tokensIndex++;
                    tokens[tokensIndex] = ';'
                    currentTocken = ''
                    tokensIndex++;
                }
                else if (item == "=") {
                    tokens[tokensIndex] = currentTocken
                    tokensIndex++;
                    tokens[tokensIndex] = '='
                    currentTocken = ''
                    tokensIndex++;
                }
                else if (item == ",") {
                    tokens[tokensIndex] = currentTocken
                    tokensIndex++;
                    tokens[tokensIndex] = ','
                    currentTocken = ''
                    tokensIndex++;
                }
                else if (item == "(") {
                    let isParam = isHavePara(str, i)
                    if (isParam.isPara && isParam.paraName) {
                        tokens[tokensIndex] = currentTocken
                        tokensIndex++;
                        tokens[tokensIndex] = '--param--'
                        tokensIndex++;
                        tokens[tokensIndex] = isParam.paraName
                        currentTocken = ''
                        tokensIndex++;
                        str.splice(i, isParam.paraLength)
                    } else {
                        tokens[tokensIndex] = currentTocken
                        tokensIndex++;
                        currentTocken = ''
                    }
                }
                else if (item == ")") {
                }
                else if (item == "#") {
                    let isHeader = isHeaderFile(str, tokensIndex)
                    if (isHeader.isHeader) {
                        tokens[tokensIndex] = `#include`
                        tokensIndex++;
                        tokens[tokensIndex] = isHeader.lib ? isHeader.lib : " "
                        tokensIndex++;
                    }
                }
                else {
                    tokens[tokensIndex] = currentTocken
                    currentTocken = ''
                    tokensIndex++;
                }
            });
            tokens = tokens.filter(function (str) {
                // remove blank space
                return /\S/.test(str);
            });
            return (tokens);
        }

        function isHavePara(str, tokensIndex) {
            let i = tokensIndex
            let isPara = false
            let paraLength = 0
            let paraName = ''
            for (i; i < str.length; i++) {
                let item = str[i + 1]
                if (item == ')') {
                    isPara = true
                    break;
                } else {
                    paraName = paraName.concat(item)
                    paraLength++
                }
            }
            return { isPara, paraName: paraName == '' ? null : paraName, paraLength }
        }

        function isHeaderFile(str, tokensIndex) {
            var header = str[tokensIndex] + str[tokensIndex + 1] + str[tokensIndex + 2] + str[tokensIndex + 3] + str[tokensIndex + 4] + str[tokensIndex + 5] + str[tokensIndex + 6] + str[tokensIndex + 7]
            var isHeader = false
            var libName = ''
            if (header == '#include') {
                let isOpen = str[tokensIndex + 8]
                if (isOpen == '<') {
                    let i = tokensIndex + 8
                    for (i; i < str.length; i++) {
                        let item = str[i + 1]
                        if (item == '>') {
                            isHeader = true
                            break;
                        } else {
                            libName = libName.concat(item)
                        }
                    }
                }
            }

            return { isHeader, lib: libName == '' ? null : libName }
        }

    </script>
</body>

</html>
