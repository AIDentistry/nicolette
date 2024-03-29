import { FullPageChat } from "flowise-embed-react";

const Chatbot = () => {
  return (
    <FullPageChat
      className="h-[300px] w-[280px] border-blue-600 border-5"
      chatflowid="9ed326f0-73d6-4470-a956-b41803b59c82"
      apiHost="http://localhost:3000"
    />
  );
};

export default Chatbot;


