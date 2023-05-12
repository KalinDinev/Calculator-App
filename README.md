# Calculator-App

Can change the CSS style completely if you comment on this part.

  //Change CSS visuals
<!-- * {
   box-sizing: border-box;
   background: radial-gradient(#2e84ad7d, #11175b);
   margin: 0;
}
body {
   display: flex;
   max-width: 100%;
   min-width: 30%;
   height: 45.5rem;
}

main {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   color: #2e84ad;
   font-size 2em;
   font-family: 'Courier New', Courier, monospace;
   margin: 5px;
} -->

.calculator {
   padding: 10px;
   border-radius: 1em;
   height: 380px;
   width: 400px;
   margin: auto;
   background-color: #191b28;
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.display-box {
   font-family: 'Orbitron', sans-serif;
   background-color: #d3e2e9;
   /* border: solid black 0.5px; */
   color: white;
   border-radius: 5px;
   width: 100%;
   height: 65%;
}

#btn {
   background-color: #c2c1ded6;
}

input[type='button'] {
   font-family: 'Orbitron', sans-serif;
   background-color: #077dc1;
   color: white;
   border: solid black 0.5px;
   width: 100%;
   border-radius: 5px;
   height: 70%;
   outline: none;
}

input:active[type='button'] {
   background: #e5e5e5;
   -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
   -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
   box-shadow: inset 0px 0px 5px #c1c1c1;
}
