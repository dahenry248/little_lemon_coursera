import React from 'react';
import { Link } from 'react-router-dom';
import bannerPic from '../components/assets_images/restaurantfood.jpg'

const Header = () => {
    return (
        <div>
            <header className='header'>
                <section>
                    <div className='banner'>
                        <h2> Little Lemon</h2>
                        <h3>Chicago, IL</h3>
                        <p>We are a family owned Mediterraneran restaurant,
                            focused on traditional recipes served w/ a modern twist.
                        </p>
                        <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                    </div>


                    <div className='bannerPic'>
                        <img src={bannerPic} alt='' />
                    </div>
                </section>

            </header>
        </div>
    );
};

export default Header;