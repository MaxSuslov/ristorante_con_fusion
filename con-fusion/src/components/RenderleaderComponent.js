import React from 'react';
import { Media } from 'reactstrap';

function RenderLeader({leaders}) {
    if (leaders !== null) {
        const leader = leaders.map((leader) => {
            return (
                <div key={leader.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={leader.image} alt={leader.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{leader.name}</Media>
                            <p>{leader.designation}</p>
                            <p>{leader.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return leader;
    } else return (
        <div></div>
    );
}

export default RenderLeader;