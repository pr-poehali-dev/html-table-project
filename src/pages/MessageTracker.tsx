
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageRow } from "@/components/MessageRow";
import { useState } from "react";

const MessageTracker = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      receiveDate: "01.09.2023",
      message: "Запрос на предоставление данных",
      receiveTarget: "Отдел кадров",
      responseDate: "03.09.2023",
      responseTarget: "Бухгалтерия"
    },
    {
      id: 2,
      receiveDate: "15.09.2023",
      message: "Запрос на техническую поддержку",
      receiveTarget: "IT отдел",
      responseDate: "15.09.2023",
      responseTarget: "Служба поддержки"
    },
    {
      id: 3,
      receiveDate: "22.09.2023",
      message: "Предложение о сотрудничестве",
      receiveTarget: "Отдел продаж",
      responseDate: "29.09.2023",
      responseTarget: "Маркетинг"
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredMessages = messages.filter(message => 
    message.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.receiveTarget.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.responseTarget.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600">
          <CardTitle className="text-2xl font-bold text-white">Учет сообщений</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex gap-4">
              <Input 
                placeholder="Поиск сообщений..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
              <Button variant="outline">Очистить</Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border-b font-medium">Дата получения</th>
                  <th className="text-left p-3 border-b font-medium">Входящее сообщение</th>
                  <th className="text-left p-3 border-b font-medium">Куда пришло</th>
                  <th className="text-left p-3 border-b font-medium">Дата ответа</th>
                  <th className="text-left p-3 border-b font-medium">Куда ответили</th>
                </tr>
              </thead>
              <tbody>
                {filteredMessages.map(message => (
                  <MessageRow key={message.id} message={message} />
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredMessages.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Сообщения не найдены
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageTracker;
