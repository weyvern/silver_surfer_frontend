import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import PeopleList from './PeopleList';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const PeopleDashboard = () => {
	const authContext = useContext(AuthContext);
	const { userProfile, loading } = authContext;
	const [peopleList, setPeopleList] = useState();
	const getPeople = async () => {
		const res = await axios.get(
			`${process.env.REACT_APP_SOCIAL_SERVICE}/userprofiles`
		);
		if (userProfile && !loading) {
			const relationships = userProfile.friends.concat(
				userProfile.sent_req,
				userProfile.inc_req
			);
			const compare = relationships.map(r => r.user_id);
			const results = res.data.data.filter(p => !compare.includes(p.user_id));
			setPeopleList(results);
		}
	};
	useEffect(() => {
		getPeople();
	}, []);
	return !loading && userProfile ? (
		<div id="People" className="m-5">
			<Tabs>
				<TabList>
					<Tab>People</Tab>
					<Tab>Friends</Tab>
					<Tab>Sent requests</Tab>
					<Tab>Received requests</Tab>
				</TabList>
				<TabPanel>
					<PeopleList peopleList={peopleList} type={0} />
				</TabPanel>
				<TabPanel>
					<PeopleList peopleList={userProfile.friends} type={3} />
				</TabPanel>
				<TabPanel>
					<PeopleList peopleList={userProfile.sent_req} type={4} />
				</TabPanel>
				<TabPanel>
					<PeopleList peopleList={userProfile.inc_req} type={1} />
				</TabPanel>
			</Tabs>
		</div>
	) : (
		<div>heheh</div>
	);
};

export default PeopleDashboard;
