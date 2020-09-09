import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import PeopleList from './PeopleList';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Spinner from '../spinner/Spinner';

const PeopleDashboard = () => {
	const authContext = useContext(AuthContext);
	const { userProfile, loading } = authContext;
	const [peopleList, setPeopleList] = useState();
	const getPeople = async () => {
		const res = await axios.get(
			`${process.env.REACT_APP_SOCIAL_SERVICE}/userprofiles`
		);
		setPeopleList(res.data.data);
	};
	useEffect(() => {
		getPeople();
	}, []);
	console.log(peopleList);
	return (
		!loading &&
		userProfile && (
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
					<PeopleList peopleList={userProfile.sent_req} />
				</TabPanel>
				<TabPanel>
					<PeopleList peopleList={userProfile.inc_req} type={1} />
				</TabPanel>
			</Tabs>
		)
	);
};

export default PeopleDashboard;
