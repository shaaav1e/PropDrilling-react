import StickyNote from "./StickyNotes";
import { useContext } from "react";
import { AppContext } from "./AppContext";
const Notes = () => {
  const { notes } = useContext(AppContext);

  return (
    <ul className="mt-16 mx-auto place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {notes.map((noteItem) => {
        return (
          <StickyNote
            // StartNote={StartNote}
            // deleteNote={deleteNote}
            key={noteItem.id}
            note={noteItem}
          />
        );
      })}
    </ul>
  );
};

export default Notes;
