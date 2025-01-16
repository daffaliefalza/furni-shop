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
import { FaComment } from "react-icons/fa"; // Import the icon you want to use

const API_KEY = import.meta.env.VITE_OPENAPI_KEY;
const systemMessage = {
  role: "system",
  content:
    "Explain all about furniture in the e-commerce website and reply with a simple prompt. Also, if the user asks a specific question that is related to the furnishop, just say yes, we have that product. If the user asks, 'Do you have a sofa?' reply that we have Utopia sofa, and leather sofa, and sofa set. If the user asks what kind of products do you have, reply with sofa, table, bedroom, chair, desk, bookshelf. If the user asks a question outside of the scope of the furnishop e-commerce website, just reply that you can't answer questions that are outside of the furnishop website.",
};

function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, This is Furnishop AI Assistant, Ask me anything about furnishop!",
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
      <div className="min-h-screen flex justify-center ">
        <div className="w-[600px] h-[600px] bg-white rounded-lg shadow-lg p-8 ">
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="Hey, daffa here. Sorry but the AI feature is unavailable at the moment" />
                  ) : null
                }
                className="h-[540px] overflow-y-auto p-4"
              >
                {messages.map((message, i) => (
                  <Message key={i} model={message} />
                ))}
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

      {/* <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full"
      > */}
      {/* <FaComment size={30} /> */}
      {/* </button> */}
    </>
  );
}

export default Chatbot;
