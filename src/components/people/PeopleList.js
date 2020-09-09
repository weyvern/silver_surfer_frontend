import React from 'react';
import Spinner from '../spinner/Spinner';
import PeopleItem from './PeopleItem';

const PeopleList = ({ peopleList, type }) => {
	return peopleList ? (
		peopleList.map(p => <PeopleItem key={p.user_id} person={p} type={type} />)
	) : (
		<Spinner />
	);
};

export default PeopleList;
