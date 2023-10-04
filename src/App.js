import React, { useState } from 'react';
import GradeForm from './components/GradeForm';
import GradesTable from './components/SearchTable';
import './App.css';


function App() {
  const [grades, setGrades] = useState([]);

  const addGrade = (grade) => {
    setGrades([...grades, grade]);
  };

  return (
    <div className="App" style={{ display: 'flex' }}>
      <GradeForm addGrade={addGrade} />
      <GradesTable grades={grades} />
    </div>
  );
}

export default App;