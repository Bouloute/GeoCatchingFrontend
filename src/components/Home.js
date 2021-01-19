import riddle from '../png/003-location.png';
import history from '../png/004-castle.png';
import artists from '../png/005-artist.png';
import others from '../png/006-question.png';
import '../Home.css';
import Card from './Card'
import React from 'react';

const Home = () => {
    return (
        <div className="Home">
            <h1 className="title">Joliette Catching</h1>
            <div className="bandeau">Bandeau explicatif</div>
            
            <div className="cards">

                <Card image={riddle} title="Art Catching" url="/art"/>
                <Card image={history} title="Histoire" url="/history"/>
                <Card image={artists} title="Artistes" url="/artists"/>
                <Card image={others} title="Autres" url="/other"/>        
            </div>
            
            <div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        
        </div>
    );
};

export default Home;