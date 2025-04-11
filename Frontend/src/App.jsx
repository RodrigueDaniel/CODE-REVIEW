import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code: code,
    });
    setReview(response.data);
    setLoading(false)
  }

  return (
    <>
      <main>
        <div className="left">
        <div className="code" style={{ position: "relative" }}>
            {!code && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "#0c0c0c",
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 16,
                  padding: 10,
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  pointerEvents: "none",
                }}
              >
                Paste your code here for review
              </div>
            )}
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            {loading ? "Loading..." : "Review"}
          </div>
        </div>
        <div className="right">
          <h3>Code Review</h3>
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
