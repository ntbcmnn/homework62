import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { IMessage } from '../../types';
import Message from '../../Components/Message/Message.tsx';
import MessageForm from '../../Components/MessageForm/MessageForm.tsx';
import { Container } from 'react-bootstrap';
import BackLink from '../../Components/BackLink/BackLink.tsx';

const Feed = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [author, setAuthor] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const baseUrl: string = 'http://146.185.154.90:8000/messages';

  const fetchData = async (): Promise<void> => {
    try {
      const response: AxiosResponse<IMessage[]> = await axios.get(baseUrl);

      const sortedMessages: IMessage[] = response.data.sort(
        (a: IMessage, b: IMessage) =>
          new Date(b.datetime).getTime() - new Date(a.datetime).getTime(),
      );

      setMessages((prevMessages) => {
        const newMessages: IMessage[] = sortedMessages.filter(
          (msg: IMessage) => {
            return !prevMessages.find(
              (prevMsg: IMessage): boolean => prevMsg._id === msg._id,
            );
          },
        );
        return [...newMessages, ...prevMessages];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (author.trim().length === 0 || message.trim().length === 0) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const data: URLSearchParams = new URLSearchParams();
      data.set('author', author);
      data.set('message', message);

      await axios.post(baseUrl, data);

      setAuthor('');
      setMessage('');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    void fetchData();

    const interval: number = setInterval((): void => {
      void fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container mt-5 mb-4">
        <BackLink page="projects"/>
      </div>

      <Container>
        <MessageForm
          author={author}
          message={message}
          onSubmit={handleSubmit}
          setAuthor={setAuthor}
          setMessage={setMessage}
        />

        {messages.map((message: IMessage) => (
          <Message key={message._id} message={message}/>
        ))}
      </Container>

    </>
  );
};

export default Feed;
