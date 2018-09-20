# JS-Tokenise

Utility code to tokenise expressions and return the components in an array of tokens.<br>
<br>
<span style="text-decoration: underline;"><strong>Example/Test:</strong></span><br>
function test(expression) {<br>
&nbsp; const tokens = tokenise(expression);<br>
&nbsp; tokens.forEach((token, index) =&gt; {<br>
&nbsp; &nbsp; &nbsp;console.log(index + "=&gt; " + token.type + "[ " + token.value + " ]");<br>
&nbsp; });<br>
}<br>
<br>
<strong>test("&lt;=7") will return</strong><br>
&nbsp; &nbsp;0=&gt; Literal[ 7 ]<br>
&nbsp; &nbsp;1=&gt; Comparator[ &lt;= ]<br>
<br>
<strong>test("89sin(45) + 2.2x/7") will return</strong><br>
&nbsp; &nbsp;0=&gt; Literal[ 22 ]<br>
&nbsp; &nbsp;1=&gt; Operator[ * ]<br>
&nbsp; &nbsp;2=&gt; Function[ cos ]<br>
&nbsp; &nbsp;3=&gt; Left Parenthesis[ ( ]<br>
&nbsp; &nbsp;4=&gt; Literal[ 60 ]<br>
&nbsp; &nbsp;5=&gt; Right Parenthesis[ ) ]<br>
&nbsp; &nbsp;6=&gt; Operator[ + ]<br>
&nbsp; &nbsp;7=&gt; Literal[ 3.1 ]<br>
&nbsp; &nbsp;8=&gt; Operator[ * ]<br>
&nbsp; &nbsp;9=&gt; Variable[ x ]<br>
&nbsp; &nbsp;10=&gt; Operator[ / ]<br>
&nbsp; &nbsp;11=&gt; Literal[ 7 ]</p>
