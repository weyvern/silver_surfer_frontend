import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';
import MessageBox from './MessageBox';
import Conversations from './Conversations';
import { Spinner } from 'react-rainbow-components';
import useChat from '../../utils/useChat';
import '../../assets/styles.css';

const ChatContainer = () => {
	const {
		sendMessage,
		contacts,
		conversations,
		createConversation,
		user
	} = useChat();
	const { id } = useParams();
	const messageBottom = useRef();
	const [currentFriend, setCurrentFriend] = useState({});
	const [currentConversation, setCurrentConversation] = useState('');
	const scrollToBottom = () => {
		messageBottom.current.scrollTop = messageBottom.current.scrollHeight;
	};
	return (
		<div className="container py-2">
			<div className="row rounded-lg overflow-hidden shadow">
				{conversations ? (
					<Fragment>
						<div className="col-2 px-0">
							<div className="bg-white">
								<div className="bg-gray px-4 py-2 bg-light">
									<p className="h5 mb-0 py-1 d-none d-md-block">Recent</p>
								</div>
								<Conversations
									conversations={conversations}
									contacts={contacts}
								/>
							</div>
						</div>
						<div className="col-10 px-0">
							<div
								id="message-box"
								className="px-4 chat-box bg-white"
								style={{ overflowY: 'scroll', height: '50rem' }}
								ref={messageBottom}
							>
								{id ? (
									<Chat
										user={user}
										contacts={contacts}
										conversations={conversations}
										currentFriend={currentFriend}
										setCurrentFriend={setCurrentFriend}
										setCurrentConversation={setCurrentConversation}
										createConversation={createConversation}
									/>
								) : (
									<div className="d-flex justify-content-center align-items-center h-100">
										Please select a conversation
									</div>
								)}
							</div>
						</div>
					</Fragment>
				) : (
					<Spinner />
				)}
			</div>
			<div className="row rounded-lg overflow-hidden shadow">
				<MessageBox
					user={user}
					sendMessage={sendMessage}
					currentFriend={currentFriend}
					currentConversation={currentConversation}
				/>
			</div>
		</div>
	);
};

export default ChatContainer;
