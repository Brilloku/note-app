import React from 'react';

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>Created: {new Date(note.createdAt).toLocaleString()}</small>
      <div className="note-actions">
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
