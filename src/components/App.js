import React from "react"
import { ThemeProvider } from '@material-ui/core/styles';
import Header from "./ui/header";
import theme from "./ui/theme"


function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
      <Header/>

    </ThemeProvider>
  
   <div>
     <h2>hello</h2>

   </div>
   </>
  );
}

export default App;
