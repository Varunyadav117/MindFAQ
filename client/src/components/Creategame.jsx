// Create game branch

import React, { useState } from 'react';
import figma from "../assets/images/figma-logo.png";
import "./create.css";

const Creategame = () => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('Kids');
  const [quizTopic, setQuizTopic] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDifficultyChange = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const handleQuizTopicChange = (event) => {
    setQuizTopic(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Do something with the form data, for example, log it to the console
    console.log('Form Data:', {
      name,
      difficulty,
      quizTopic,
    });
  };

  return (
    <div>
      <div className='top-sec'>
        <img className='logo' src={figma} alt='MindFAQ Logo' />
      </div>

      <div className="your-component">
        <form onSubmit={handleFormSubmit}>
          <label>Name your Game:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />

          <label>Difficulty:</label>
          <div className="difficulty-options">
            {['Kids', 'Teenagers', 'Adults', 'Mix'].map((option) => (
              <div
                key={option}
                className={`difficulty-option ${difficulty === option ? 'dark' : 'light'}`}
                onClick={() => handleDifficultyChange(option)}
              >
                {option}
              </div>
            ))}
          </div>

          <label>What do you want the quiz to be about:</label>
          <textarea
            value={quizTopic}
            onChange={handleQuizTopicChange}
          />

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Creategame;
