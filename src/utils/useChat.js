import { useEffect, useRef, useState, useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import socketIOClient from 'socket.io-client';

const useChat = () => {
	const authContext = useContext(AuthContext);
	const { token, user, userProfile } = authContext;
	const [contacts, setContacts] = useState();
	const [conversations, setConversations] = useState();
	const socketRef = useRef();

	useEffect(() => {
		if (userProfile) {
			socketRef.current = socketIOClient(process.env.REACT_APP_SOCKET_SERVER, {
				query: `token=${token}&id=${user.id}`
			}).on('error', err => {
				console.log(err.message);
				throw new Error(err.type);
			});

			socketRef.current.on('connect', () => {
				socketRef.current.on('authenticated', () => {
					setContacts(userProfile.friends);
				});
			});

			socketRef.current
				.on('message', msg => {})
				.on('conversation-list', data => setConversations(data));

			return () => {
				socketRef.current.disconnect();
			};
		}
	}, [userProfile]);

	const sendMessage = (msg, rcpt) => {
		socketRef.current.emit('message', { msg, rcpt });
	};

	const createConversation = (usr1, usr2, convId) => {
		socketRef.current.emit('create-convo', { usr1, usr2, convId });
	};

	return { sendMessage, createConversation, contacts, conversations, user };
};

export default useChat;
