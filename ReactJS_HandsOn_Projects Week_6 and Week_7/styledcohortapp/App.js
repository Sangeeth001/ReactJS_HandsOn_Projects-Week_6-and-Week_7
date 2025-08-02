import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails name="React Bootcamp" status="ongoing" />
      <CohortDetails name="Angular Basics" status="completed" />
    </div>
  );
}
export default App;
