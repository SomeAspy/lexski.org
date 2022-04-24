import SkiHouse from '../images/skiHouseWide.webp';
import '../CSS/home.css';

export default function () {
    return (
        <>
            <div>
                <img
                    src={SkiHouse}
                    alt='Lexington Ski House'
                    className='bannerImage'
                />
                <p className='bannerText'>Lexington Ski Club</p>
            </div>
        </>
    );
}
