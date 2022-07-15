import photo from '../images/photo-grid.PNG';

export default function Hero() {
    return (
        <section className='hero'>
            <img src={photo} alt="various Airbnb activities" className='heroPhoto' />
            <h1 className='heroHeader'>Online Experiences</h1>
            <p className='heroText'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}