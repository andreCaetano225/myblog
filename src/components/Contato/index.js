import React from 'react';
import './contato.css'

function Contato (){
    return(
        <div className="contato">
           <h1 className="h1" id="contato">Contato</h1>
        <div>
               <p className="p-cont">Caso queira entrar em contato comigo me mande um email ou uma mensagem via Whatsapp.</p>
               <a href="https://api.whatsapp.com/send?phone=5588988665252&text=Ol%C3%A1%20Andr%C3%A9%20vamos%20conversar%20%3F" className="a-cont" target="_BLANK">WhatsApp: (88) 98866-5252</a>
               <p className="p-cont1">Email: andre.caetano2007@hotmail.com</p>
     </div>    
             
     </div>
    )
}

export default Contato;