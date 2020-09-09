import React from 'react';

const Messages = ({ messages, currentFriend, user }) => {
	return (
		messages &&
		messages.map((msg, i) => {
			if (user.id !== msg.sender) {
				return (
					<div
						className="media mb-3 mr-auto w-xs-100"
						key={`msgId_${msg.date}`}
					>
						<img
							src={currentFriend.profile_picture}
							alt="user"
							width="50"
							className="rounded-circle"
						/>
						<div className="media-body ml-3">
							<div className="bg-indigo rounded py-2 px-3 mb-2">
								<p className="text-small mb-0 text-white">{msg.content}</p>
							</div>
							<p className="small text-muted">
								{new Date(msg.date).toLocaleDateString('de-DE')}
							</p>
						</div>
					</div>
				);
			} else {
				return (
					<div
						className="media w-xs-100 ml-auto mb-3"
						style={{ maxWidth: '50%' }}
						key={`msgId_${msg.date}`}
					>
						<div className="media-body">
							<div className="bg-primary rounded py-2 px-3 mb-2">
								<p className="text-small mb-0 text-white">{msg.content}</p>
							</div>
							<p className="small text-muted float-right">
								{new Date(msg.date).toLocaleDateString('de-DE')}
							</p>
						</div>
					</div>
				);
			}
		})
	);
};

export default Messages;
