import React, { useState } from 'react';

const AddComment = () => {
    const [newComment, setNewComment] = useState({});

    const handleChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value });
      };
	
	return (
		<div class="d-flex my-3 align-items-center">
          
							<div className="avatar avatar-xl mx-2">
								<img
									className="avatar-img"
									src="https://source.unsplash.com/QAB-WJcbgJk/100x100"
								/>
							</div>
       
       
        <form class="d-flex" style={{width: "100%"}}>
       
							<textarea
								className="form-control rounded-pill mx-2"
								id="leadCapBody"
                                name="body"
                                width= "100%"
								type="text"
                                rows="4"
                                columns="100"
                                placeholder="Please tell us what you think"
								onChange={handleChange}
							/>
					
						<button
							className="btn btn-secondary btn-marketing btn-lg rounded-pill mt-4"
                            type="submit"
                            style={{maxHeight: "4rem"}}
						>
							Post Comment
						</button>
                        </form>
        </div>
	);
};

export default AddComment;