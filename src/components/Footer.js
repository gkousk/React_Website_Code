import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Be the first to know about our new products!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn-outline'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
      
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            <img src="../icon.png" alt="icon" />
                            Burger house 
                        </Link>
                    </div>
                    <small className='website-rights'>Burger house © 2021</small>
                    <div className="social-icons">
                        <Link to="/" target="_blank" aria-label='Facebook' className="social-icon-link facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link to="/" target="_blank" aria-label='Instagram' className="social-icon-link instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>

                        <Link to="/" target="_blank" aria-label='Twitter' className="social-icon-link twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
