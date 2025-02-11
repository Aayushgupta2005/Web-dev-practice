import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCThguTp5QYuwWBh4sV7Rjllllg6P_g49w"; // Use your Gemini API key here
const genAI = new GoogleGenerativeAI(API_KEY);

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(input);
    const botResponse = result.response.text();

    setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 rounded shadow">
      <div className="h-64 overflow-y-auto border-b mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? "text-right" : "text-left"}>
            <p className={`p-2 m-2 inline-block rounded ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} className="mt-2 w-full bg-blue-600 text-white p-2 rounded">
        Send
      </button>
    </div>
  );
}

export default Chatbot;
