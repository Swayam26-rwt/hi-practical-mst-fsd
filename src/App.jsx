import { useState } from "react";

function App() {
  // State for post content
  const [content, setContent] = useState("");

  // State for selected platform
  const [platform, setPlatform] = useState("twitter");

  // Character limits
  const limits = {
    twitter: 280,
    linkedin: 3000
  };

  // Current limit based on selected platform
  const limit = limits[platform];

  // Handle textarea input
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  // Handle platform change
  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  // Check whether limit is exceeded
  const isExceeded = content.length > limit;

  return (
    <div>
      <h1>Post Composer</h1>

      {/* Platform Selection */}
      <label>Select Platform: </label>

      <select
        value={platform}
        onChange={handlePlatformChange}
      >
        <option value="twitter">Twitter</option>
        <option value="linkedin">LinkedIn</option>
      </select>

      <br />
      <br />

      {/* Post Textarea */}
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Write your post..."
        rows="8"
        cols="50"
      />

      <br />

      {/* Character Count */}
      <p>
        Characters: {content.length} / {limit}
      </p>

      {/* Error Message */}
      {isExceeded && (
        <p style={{ color: "red" }}>
          Error: Character limit exceeded!
        </p>
      )}
    </div>
  );
}

export default App;