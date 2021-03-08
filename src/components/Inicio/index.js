import React from 'react';
import Planeta from './planeta.mp4'
import Typist from 'react-typist';
import './inicio.css'
function Inicio () {
    return(
         <div id="home">
           <div className="text" >
           <h1 >ANDRÉ SOUSA</h1>
           <Typist cursor={{show: false}} speed={50}>
             <Typist.Delay ms={650}/>
           <p className="p"> DESENVOLVEDOR FRONT-END WEB E EM BREVE DE APP, <br/>
           PROGRAMADOR REACT JS E REACT NATIVE.</p> 
           </Typist>
          </div>
             <div>
             <video    autoPlay loop muted
              className="video">
                 <source src={Planeta} type="video/mp4"/>
             </video>
               
        </div>
        

         </div>
    )
}

export default Inicio;