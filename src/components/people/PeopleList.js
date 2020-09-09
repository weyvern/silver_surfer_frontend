import React, { useEffect, useState, useContext } from 'react';
import Spinner from '../spinner/Spinner';
import PeopleItem from './PeopleItem';
import axios from 'axios';

const PeopleList = () => {
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
	return peopleList ? (
		peopleList.map(p => <PeopleItem key={p.user_id} person={p} />)
	) : (
		<Spinner />
	);
};

export default PeopleList;
