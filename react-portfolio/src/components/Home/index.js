import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-b.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';

const Home = () => {
const [letterClass, setletterClass] = useState('text-animate')
const nameArray = ['a', 'i', 'n', '', 'O', 'b', 'e','r','m','a','r','k']
const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', '', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

useEffect(() => {
    return setTimeout(() => {
        setletterClass('text-animate-hover')
    }, 4000)
}, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>W</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>r</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>d</span>
                    <br />
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15}
                />
                </h1>
                <h2> | US Army Veteran | Full Stack Software Engineer | Secret Clearance | </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME HERE!</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home;