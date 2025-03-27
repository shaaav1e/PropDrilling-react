import { useState, useEffect } from "react";
import StickyNote from "./components/StickyNotes";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      text: "note 1",
      id: 1,
      starred: true,
    },
    {
      text: "note 2",
      id: 2,
      starred: false,
    },
    {
      text: "note 3",
      id: 3,
      starred: false,
    },
    {
      text: "note 4",
      id: 4,
      starred: false,
    },
    {
      text: "note 5",
      id: 5,
      starred: false,
    },
    {
      text: "note 6",
      id: 6,
      starred: false,
    },
  ]);
  const togglestartNote = (noteId) => {
    setNotes(
      notes.map((noteItem) => {
        if (noteItem.id === noteId) {
          return {
            ...noteItem,
            starred: !noteItem.starred,
          };
        }
        return noteItem;
      })
    );
  };
  const deleteNote = (noteId) => {
    setNotes(notes.filter((noteItem) => noteItem.id !== noteId));
  };
  return (
    <>
      <Notes
        StartNote={togglestartNote}
        deleteNote={deleteNote}
        notes={notes}
      />
    </>
  );
}

export default App;
