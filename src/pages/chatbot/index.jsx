import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import Navbar from "../../components/Navbar";

const API_KEY = "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";
const systemMessage = {
  role: "system",
  content:
    "Explain all about furniture in e-commerce website and reply with a simple prompt. Also if the user ask a specific question that is related to the furnishop, just say yes we have that product. If user ask do you have sofa, reply it that we have utopia sofa, and leather sofa, and sofa set. If user ask what kind of products does user have, reply it with sofa, table, bedroom, chair,desk, bookshelf. If the user ask a question outside of the scope of furnishop e-commerce website, just reply that you can't answer question that are outside of the furnishop website.",
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, This is Furnishop AI Assistant,  Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-[450px] h-[550px] bg-white rounded-lg shadow-lg p-8">
          {" "}
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="Furnishop AI is typing" />
                  ) : null
                }
                className="h-[540px] overflow-y-auto p-4"
              >
                {" "}
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
                className="mt-4"
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
