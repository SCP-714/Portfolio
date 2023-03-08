import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-b.png';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>HelloWorld, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                ain Obermark
                <br />
                Software Engineer
                </h1>
                <h2> | US Army Veteran | Full Stack Software Engineer | Secret Clearance | </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME HERE!</Link>
            </div>
        </div>
    );
}

export default Home;