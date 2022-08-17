import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{  
        box-sizing: border-box;
  margin: 0;
  padding: 0;
   font-family: 'Poppins', sans-serif;
   
}
body {
  background: linear-gradient(
    90deg,
    rgba(48, 16, 255, 1) 0%,
    rgba(100, 115, 255, 1) 100%
  );
}
.appTo-Do{ display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 400px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
}

h1 {
  margin: 32px 0;
  color: rgba(100, 115, 255, 1);
  font-size: 24px;
}
`;
