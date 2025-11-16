import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'note-app-production-d2c6.up.railway.app/api';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      Sentry.captureException(error);
    }
  };

  const addNote = async (note) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/notes`, note);
      setNotes([response.data, ...notes]);
    } catch (error) {
      console.error('Error adding note:', error);
      Sentry.captureException(error);
    }
  };

  const updateNote = async (id, updatedNote) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/notes/${id}`, updatedNote);
      setNotes(notes.map(note => note._id === id ? response.data : note));
      setEditingNote(null);
    } catch (error) {
      console.error('Error updating note:', error);
      Sentry.captureException(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
      Sentry.captureException(error);
    }
  };

  const startEditing = (note) => {
    setEditingNote(note);
  };

  const cancelEditing = () => {
    setEditingNote(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Notes App</h1>
      </header>
      <main>
        <NoteForm
          onSubmit={editingNote ? (note) => updateNote(editingNote._id, note) : addNote}
          initialNote={editingNote}
          onCancel={cancelEditing}
        />
        <NotesList
          notes={notes}
          onEdit={startEditing}
          onDelete={deleteNote}
        />
      </main>
    </div>
  );
}

export default App;
