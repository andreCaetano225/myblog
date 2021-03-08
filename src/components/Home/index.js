import React from 'react';
import Inicio from '../Inicio';
import Sobre from '../Sobre';
import Video from '../Video';
import Contato from '../Contato';
function Home () {
    return(
         <div>
          <Inicio/>
          <Sobre/>
          <Video/>
          <Contato/>
         </div>
    )
}

export default Home;