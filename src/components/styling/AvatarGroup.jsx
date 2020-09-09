
import React from 'react';
import userPicture from "../../assets/img/login/placeholder.png";

const AvatarGroup = (props) => {

	
	return (
		<div id="AvatarGroup">
       <span class="avatar">
       <img
                    class="avatar avatar-sm"
                    src={/*author[0].picture? author[0].picture : */ userPicture}
                  />
       </span>
			
       <span class="avatar">
       <img
                    class="avatar avatar-sm"
                    src={/*author[0].picture? author[0].picture : */ userPicture}
                  />
       </span>
       <span class="avatar">
       <img
                    class="avatar avatar-sm"
                    src={/*author[0].picture? author[0].picture : */ userPicture}
                  />
       </span>
                   <span className="avatar" style={{backgroundColor: /*"#eff1f3"*/"black", height: "1.75rem", width: "1.75rem"}}>
                        5
                   </span>
		</div>
	);
};

export default AvatarGroup;