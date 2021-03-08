import React from 'react'; 
import './video.css';
import Typist from 'react-typist';
function Video () {
    return(
        <div className="videos" id="video">
        <h1 className="h1" >Vídeos</h1>
        <Typist curso={{show:false}}>
            <Typist.Delay ms={5500} />
        <p className="p-vi">Aqui você encontra algums dos varios conteudos voltados a programação do canal.</p>
        </Typist>
        <div>
        <iframe  className="video1" src="https://www.youtube.com/embed/p9rFuM4Hkrc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe  className="video2" src="https://www.youtube.com/embed/-ax-YHHeJnI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    )
    
}

export default Video;