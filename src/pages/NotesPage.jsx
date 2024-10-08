import NoteCard from "../components/NoteCard";
import Controls from "../components/Controls";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const NotesPage = () => {
  const { notes, setNotes } = useContext(NoteContext);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} setNotes={setNotes} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
