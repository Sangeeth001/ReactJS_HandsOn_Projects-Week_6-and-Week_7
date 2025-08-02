import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find(t => t.id === parseInt(id));

  if (!trainer) return <p>Trainer not found!</p>;

  return (
    <div>
      <h3>{trainer.name}</h3>
      <p>Email: {trainer.email}</p>
      <p>Phone: {trainer.phone}</p>
      <p>Tech: {trainer.technology}</p>
      <p>Skills: {trainer.skills.join(', ')}</p>
    </div>
  );
}

export default TrainerDetails;
