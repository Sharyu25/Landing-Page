const HeroSection = () => {

    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                       YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shooping">
                    <p>Also Available On</p>

                    <div className="brand-icons"> 
                        <img src="/Images/amazon.png" alt="amazon-logo"/>
                        <img src="/Images/flipkart.png" alt="flipkart-logo"/>
                    </div>

                </div>
            </div>
        
        <div className="hero-image">
            <img src="/Images/shoe_image.png" alt="hero-image"/>
        </div>
        
        </main>


    );
};

export default HeroSection;