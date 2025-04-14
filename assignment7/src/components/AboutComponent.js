import React from 'react';

const About = () => {
    return (
        <div className="container">
            <header className="text-center mt-5 mb-3">
                <h1>About Us</h1>
            </header>
            
            <section className="row">
                <article className="col-md-6">
                    <h2>Welcome to Our Restaurant!</h2>
                    <p>
                        Nestled in the heart of the city, our restaurant offers a dining experience like no other. 
                        From gourmet dishes crafted with the freshest ingredients to a warm and inviting atmosphere, 
                        we aim to make every visit unforgettable. Whether you're celebrating a special occasion or enjoying a casual meal, 
                        our team is here to ensure your experience is exceptional.
                    </p>
                    <p>
                        Our journey began with a passion for culinary excellence and a love for sharing great food. 
                        Over the years, we’ve refined our recipes and embraced a fusion of local and international flavors. 
                        Our menu caters to all palates, offering something for everyone — from vegetarians to meat enthusiasts — with every dish prepared to perfection.
                    </p>
                </article>
                <aside className="col-md-6">
                    <img src="/assets/images/uthappizza.png" alt="Uthappam Pizza" className="img-fluid m-3" />
                    <img src="/assets/images/zucchipakoda.png" alt="Zucchini Pakoda" className="img-fluid" />
                </aside>
            </section>

            <section className="mt-4">
                <h2>Our Mission</h2>
                <p>
                    At our restaurant, we strive to serve more than just food — we create experiences. 
                    Our mission is to provide a welcoming space where people can come together, enjoy delicious meals, and create lasting memories. 
                    We are committed to delivering exceptional customer service, fostering a home-like atmosphere, and serving high-quality, flavorful dishes that leave a lasting impression.
                </p>
            </section>
        </div>
    );
};

export default About;