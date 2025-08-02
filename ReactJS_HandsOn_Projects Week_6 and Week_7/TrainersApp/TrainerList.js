import React from 'react';
import { Link } from 'react-router-dom';

function TrainerList({ data }) {
  return (
    <div>
      <h3>Trainer List</h3>
      {data.map(tr => (
        <div key={tr.id}>
          <Link to={`/trainer/${tr.id}`}>{tr.name}</Link>
        </div>
      ))}
    </div>
  );
}
export default TrainerList;
