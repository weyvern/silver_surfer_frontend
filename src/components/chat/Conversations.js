import React from 'react';
import { Link } from 'react-router-dom';

const Conversations = ({ contacts, conversations }) => {
	const activeConversations = conversations.map(conversation => {
		contacts.map(contact => {
			if (conversation.participants.includes(contact.user_id)) {
				conversation.contact = contact;
			}
		});
		return conversation;
	});
	return (
		<div className="messages-box">
			<div className="list-group rounded-0">
				{activeConversations ? (
					activeConversations.map(activeConversation => (
						<Link
							to={`/chat/${activeConversation.contact.username}`}
							key={activeConversation.contact.user_id}
							className="list-group-item list-group-item-action rounded-0"
						>
							<div className="d-flex align-items-center">
								<img
									src={activeConversation.contact.profile_picture}
									alt={activeConversation.contact.username}
									width="75"
									className="rounded-circle img-fluid"
									style={{ minWidth: '50px' }}
								/>
								<div className="ml-4 d-none d-lg-block">
									<h6 className="mb-0">{`${activeConversation.contact.name.first} ${activeConversation.contact.name.last}`}</h6>
									<small className="small font-weight-bold">25 Dec</small>
								</div>
							</div>
						</Link>
					))
				) : (
					<div>Looks like you haven't added any friends</div>
				)}
			</div>
		</div>
	);
};

export default Conversations;
