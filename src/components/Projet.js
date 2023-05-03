import React, { useState } from 'react';


function Projet({ ajouterProjet }) {
  const [nomProjet, setNomProjet] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    ajouterProjet(nomProjet, dateDebut, dateFin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom du projet :
        <input type="text" value={nomProjet} onChange={(e) => setNomProjet(e.target.value)} />
      </label>
      <br />
      <label>
        Date de début :
        <input type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
      </label>
      <br />
      <label>
        Date de fin :
        <input type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
      </label>
      <br />
      <Stack spacing={2} direction="row">
        <Button type="submit">Ajouter</Button>
      </Stack>
    </form>
  );
}

export default Projet;
