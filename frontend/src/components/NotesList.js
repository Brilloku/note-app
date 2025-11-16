import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="notes-list">
      <h2>Your Notes</h2>
      {(!notes || notes.length === 0) ? (
        <p>No notes yet. Create your first note!</p>
      ) : (
        notes.map(note => (
          <NoteItem
            key={note._id}
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default NotesList;
