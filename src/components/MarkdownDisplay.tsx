import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

function MarkdownDisplay({ filename }) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(filename)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [filename]);

  return <Markdown>{markdown}</Markdown>;
}

export default MarkdownDisplay;
