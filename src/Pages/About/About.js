import React from 'react';
import momin from '../../image/momin.png';

const About = () => {
    return (
        <div class="container mt-5 card mb-3" style={{ width: "" }}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={momin} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8 ">
                    <div class="card-body w-50">
                        <h5 class="card-title">Abdul Momin</h5>
                        <p class="card-text">Assalamu Alaikum. I am an honors 3 year student. I want to do a good job to learn web developer, I want to work in an organization and I am learning the course in the hope that I can do something in the future. I am a web developer and I am learning and I will go to education InshaAllah.</p>
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;