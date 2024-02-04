import React from 'react';
import logo from './assets_images/Logo.svg';


const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src='logo' alt=''/>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>HOME</a></li>
                        <li><a href='/'>ABOUT</a></li>
                        <li><a href='/'>MENU</a></li>
                        <li><a href='/'>RESERVATIONS</a></li>
                        <li><a href='/'>ORDER ONLINE</a></li>
                        <li><a href='/'>LOGIN</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> </li>
                        <li>Phone Number: <br/> ++0123 456 789</li>
                        <li>Email: <br/> littlelemon@gmail.com</li>

                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>FaceBook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>

                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;