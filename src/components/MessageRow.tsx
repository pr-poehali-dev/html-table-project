
interface Message {
  id: number;
  receiveDate: string;
  message: string;
  receiveTarget: string;
  responseDate: string;
  responseTarget: string;
}

interface MessageRowProps {
  message: Message;
}

export const MessageRow = ({ message }: MessageRowProps) => {
  return (
    <tr className="border-b hover:bg-muted/30 transition-colors">
      <td className="p-3">{message.receiveDate}</td>
      <td className="p-3">{message.message}</td>
      <td className="p-3">{message.receiveTarget}</td>
      <td className="p-3">{message.responseDate}</td>
      <td className="p-3">{message.responseTarget}</td>
    </tr>
  );
};
