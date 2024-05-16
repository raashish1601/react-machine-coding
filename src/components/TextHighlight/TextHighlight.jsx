import React, { useState } from "react";
import "./styles.css";

const str = `My name is Mazid Hussain and I am working as SDE1. Mazid Mazid Mazid Mazid`;

const findOccurrences = (text, searchTerm) => {
  const occurrences = [];
  let index = text.indexOf(searchTerm);
  while (index !== -1) {
    occurrences.push(index);
    index = text.indexOf(searchTerm, index + 1);
  }
  return occurrences;
};

const highlightOccurrences = (text, searchTerm, occurrences) => {
  let highlighted = "";
  let startIndex = 0;
  const searchLen = searchTerm.length;
  occurrences.forEach((occurrence) => {
    highlighted += text.substring(startIndex, occurrence);
    highlighted += `<span class="active">${text.substring(occurrence, occurrence + searchLen)}</span>`;
    startIndex = occurrence + searchLen;
  });
  highlighted += text.substring(startIndex);
  return highlighted;
};

const TextHighlight = () => {
  const [search, setSearch] = useState("");
  const [highlightedString, setHighlightedString] = useState(str);

  const handleSearch = () => {
    if (!search) {
      setHighlightedString(str);
      return;
    }
    const occurrences = findOccurrences(str, search);
    const highlighted = highlightOccurrences(str, search, occurrences);
    setHighlightedString(highlighted);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <h2>String Match</h2>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
      <div dangerouslySetInnerHTML={{ __html: highlightedString }}></div>
    </div>
  );
};

export default TextHighlight;
