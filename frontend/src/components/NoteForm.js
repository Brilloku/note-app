import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, initialNote, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialNote) {
      setTitle(initialNote.title);
      setContent(initialNote.content);
    }
  }, [initialNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title: title.trim(), content: content.trim() });
      setTitle('');
      setContent('');
    }
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    onCancel();
  };

  return (
    <div className="note-form">
      <h2>{initialNote ? 'Edit Note' : 'Create New Note'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">{initialNote ? 'Update' : 'Create'}</button>
          {initialNote && <button type="button" onClick={handleCancel}>Cancel</button>}
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
