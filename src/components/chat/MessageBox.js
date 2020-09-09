import React, { useState } from 'react';

const MessageBox = ({
	user,
	sendMessage,
	currentFriend,
	currentConversation
}) => {
	const [message, setMessage] = useState('');
	const submit = e => {
		if (e.key === 'Enter') {
			e.preventDefault();
			const msg = {
				conversationId: currentConversation,
				date: Date.now(),
				content: message,
				sender: user.id
			};
			sendMessage(msg, currentFriend.user_id);
			setMessage('');
		}
	};

	return (
		<form action="#" className="bg-light w-100">
			<div className="input-group">
				<input
					type="text"
					value={message}
					onChange={e => setMessage(e.target.value)}
					onKeyDown={submit}
					className="form-control rounded-0 border-0 py-4 bg-blue-soft"
					autoFocus
				/>
				<div className="input-group-append">
					<button
						id="button-addon2"
						type="submit"
						className="btn btn-link indigo"
					>
						<i className="fa fa-paper-plane"></i>
					</button>
				</div>
			</div>
		</form>
	);
};

export default MessageBox;
