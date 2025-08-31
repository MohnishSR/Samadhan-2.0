import { useState } from 'react';

function TextPreview() {
  // Initialize state for the text input
  const [text, setText] = useState('');

  // Function to handle input changes
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="text-preview-container">
      <h2>Live Text Preview</h2>
      <div className="input-container">
        <textarea 
          value={text} 
          onChange={handleTextChange} 
          placeholder="Type something here..."
          rows="5"
        />
      </div>
      <div className="preview-container">
        <h3>Preview:</h3>
        <div className="preview-text">
          {text || <span className="placeholder-text">Preview will appear here...</span>}
        </div>
        <div className="character-count">
          Character Count: {text.length}
        </div>
      </div>
    </div>
  );
}

export default TextPreview;