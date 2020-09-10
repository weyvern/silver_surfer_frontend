import React from 'react';
import { Spinner } from 'react-rainbow-components';
import PeopleItem from './PeopleItem';

const PeopleList = ({ peopleList, type }) => {
	return (
		<div className="d-flex flex-wrap">
			{peopleList ? (
				peopleList.map(p => (
					<PeopleItem key={p.user_id} person={p} type={type} />
				))
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default PeopleList;
