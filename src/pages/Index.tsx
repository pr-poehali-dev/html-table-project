
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Система учета сообщений</h1>
        <p className="text-xl text-gray-600 mb-8">Отслеживайте входящие сообщения и ответы на них</p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          onClick={() => navigate("/messages")}
        >
          Перейти к таблице сообщений
        </Button>
      </div>
    </div>
  );
};

export default Index;
