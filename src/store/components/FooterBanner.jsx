import React from 'react'

const FooterBanner = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;``
        console.log('Email submitted:', email);
      };
  return (
    <div className="FooterPart">
        <div className="FirstSection">
            <h2>Subscribe to our awesome emails.</h2>
            <p className="para">Get our latest offers and news straight in your inbox.</p>
            <div className="mailSection">
            <form className="mail-section" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            aria-label="Email address"
            required
          />
          <button type="submit" className="subscribe">
            <span className="subs">Subscribe</span>
          </button>
        </form>
            </div>
        </div>
        <div className="SecondSection">
            <h2>Download our apps</h2>
            <p className="para">Shop our products and offers on-the-go.</p>
            <div className="bannerimg">
                <img className='image1'  src="assets/mainfooter.png" alt='' />
                <img  className='image2' src="assets/appstore.png" alt='' />
            </div>
        </div>
    </div>
  )
}

export default FooterBanner