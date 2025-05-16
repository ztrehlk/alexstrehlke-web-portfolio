import React, { useState } from 'react';
// import Header from './Header';
import profileImg from './assets/images/profile.png';
import exploreImg from './assets/images/explore.png';
import feedImg from './assets/images/feed.png';
import loggingImg from './assets/images/logging.png';
import e1rmImg from './assets/images/e1rm.png';
import initialImg from './assets/images/initial-fortis.png'
import BlogPostsList from './components/BlogPostsList';
import MainSection from './components/MainSection';
import './styles/Fortis.css'; 

const Fortis = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const blogPosts = [
        { id: 'pitch-deck', title: 'Creating Fortis\' First Pitch Deck' },
        { id: 'discrepancy', title: 'Resolving the Downloads vs. Accounts Made Discrepancy' },
        { id: 'usage', title: 'Are People Actually Using This?' },
        { id: 'analytics', title: 'Implementing Strength Tracking Analytics' },
        { id: 'cross-platform', title: 'The Cross-Platform Launch Strategy' }
    ];

    const features = [
        { img: loggingImg, title: 'Workout Logging', desc: 'Track every rep and set with intuitive logging' },
        { img: e1rmImg, title: 'Strength Analytics', desc: 'Visualize your progress with e1RM tracking' },
        { img: feedImg, title: 'Social Feed', desc: 'Share workouts and connect with others' },
        { img: exploreImg, title: 'Exercise Explorer', desc: 'Discover new exercises and routines' },
        { img: profileImg, title: 'Progress Tracking', desc: 'See your transformation over time' }
    ];

    return (
        <main>
            <div className="fortis-container">
                {/* <Header 
                    isMobileMenuOpen={isMobileMenuOpen} 
                    setIsMobileMenuOpen={setIsMobileMenuOpen} 
                /> */}

                <div className="content-wrapper">
                    {/* Removed nav/sidebar */}
                    <MainSection 
                        activeSection={activeSection}
                        blogPosts={blogPosts}
                        features={features}
                    />
                </div>
            </div>
        </main>
    );
};

export default Fortis;
