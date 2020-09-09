import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Messages from './Messages';

const Chat = ({
	user,
	contacts,
	conversations,
	currentFriend,
	setCurrentFriend,
	setCurrentConversation,
	createConversation
}) => {
	const { id } = useParams();
	const [enableChat, setEnableChat] = useState(false);
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		const contact = contacts.filter(
			contact => contact.username.toLowerCase() === id.toLowerCase()
		);
		if (contact[0]) {
			setCurrentFriend(contact[0]);
			const conversation = conversations.find(conversation =>
				conversation.participants.includes(contact[0].user_id)
			);
			if (conversation) {
				setMessages(conversation.messages);
				setCurrentConversation(conversation.id);
				setEnableChat(true);
			} else {
				const convId = `${Date.now()}_${user.id}_${contact[0].user_id}`;
				createConversation(user.id, contact[0].user_id, convId);
				setCurrentConversation(convId);
				setEnableChat(true);
			}
		}
	}, [id, conversations]);
	return enableChat ? (
		<Messages messages={messages} currentFriend={currentFriend} user={user} />
	) : (
		<div className="d-flex justify-content-center align-items-center h-100">{`It appears that ${id} is not in your friend list`}</div>
	);
};

export default Chat;
