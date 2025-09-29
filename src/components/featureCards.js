/*Website by Divya Rao
Github Link: https://github.com/divyarao54*/
import React from 'react'
import "../styles/featureCards.css"
import speakingPractice from '../assets/speaking-practice.jpg'
import mockTest from '../assets/mock-test.jpg'
import aiBandScoring from '../assets/ai-band-scoring.jpg'

const FeatureCards = () => {
    const handleLinkClick = () => {
        window.location.href = "https://www.linkedin.com/in/divyarao54/";
    }
  return (
    <div className='feature-cards-container'>
        <div className='feature-title'>Feature Cards</div>
        <div className='feature-cards-section'>
            <div className='feature-card'>
                <div className='feature-card-img-container'>
                    <img className='feature-card-img' src={speakingPractice} alt='feature-card-image'/>
                </div>
                <div className='feature-card-text-section'>
                    <div className='card-text'>
                        <div className='feature-card-title'>Feature Card Title</div>
                        <div className='feature-card-description'>Feature Card Description</div>
                    </div>
                    <button onClick={handleLinkClick} className='feature-card-button'>LEARN MORE</button>
                </div>
            </div>
            <div className='feature-card'>
                <div className='feature-card-img-container'>
                    <img className='feature-card-img' src={mockTest} alt='feature-card-image'/>
                </div>
                <div className='feature-card-text-section'>
                    <div className='card-text'>
                        <div className='feature-card-title'>Feature Card Title</div>
                        <div className='feature-card-description'>Feature Card Description</div>
                    </div>
                    <button onClick={handleLinkClick} className='feature-card-button'>LEARN MORE</button>
                </div>
            </div>
            <div className='feature-card'>
                <div className='feature-card-img-container'>
                    <img className='feature-card-img' src={aiBandScoring} alt='feature-card-image'/>
                </div>
                <div className='feature-card-text-section'>
                    <div className='card-text'>
                        <div className='feature-card-title'>Feature Card Title</div>
                        <div className='feature-card-description'>Feature Card Description</div>
                    </div>
                    <button onClick={handleLinkClick} className='feature-card-button'>LEARN MORE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureCards