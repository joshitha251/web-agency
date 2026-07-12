import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi 👋 I'm the Business WebWorks AI Assistant. How can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  
  
  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to get AI response");
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply || "No reply received.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: error.message || "Something went wrong 😢",
        },
      ]);

      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 9999,
            border: "none",
            borderRadius: 999,
            padding: "14px 18px",
            background: "linear-gradient(135deg, #5B5EF7, #3f43d2)",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,.3)",
            fontWeight: 700
          }}
        >
          💬 Chat with us
        </button>
      )}

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 360,
            height: 520,
            background: "#121212",
            border: "1px solid #2b2b2b",
            borderRadius: 18,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 9999,
            boxShadow: "0 10px 30px rgba(0,0,0,.4)"
          }}
        >
          <div
            style={{
              padding: 16,
              fontWeight: 700,
              borderBottom: "1px solid #2b2b2b",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <span>🤖 Business WebWorks AI</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: 18
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 15
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: 12,
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start"
                }}
                
              >
                <div
                  style={{
                    background:
                      msg.sender === "user" ? "#5B5EF7" : "#222",
                    padding: "10px 14px",
                    borderRadius: 14,
                    maxWidth: "80%"
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          {/* 👇 OUTSIDE the map */}
           {loading && (
           <div style={{ padding: 10 }}>
           🤖 Typing...
           </div>
          )}

          <div
            style={{
              display: "flex",
              borderTop: "1px solid #2b2b2b"
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
              if (e.key === "Enter") {
              sendMessage();
            }
}}
              placeholder="Type here..."
              style={{
                flex: 1,
                padding: 14,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white"
              }}
            />
           <button
  onClick={sendMessage}
  style={{
    width: 80,
    border: "none",
    cursor: "pointer",
    background: "#5B5EF7",
    color: "white",
    fontWeight: "bold"
  }}
>
  Send
</button> 
          </div>
        </div>
      )}
    </>
  );
}
