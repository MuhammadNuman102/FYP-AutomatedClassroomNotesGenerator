import React, { useEffect, useState } from "react";
import { FaDownload, FaSearch } from "react-icons/fa";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const userId = localStorage.getItem("user_id");

  // 📥 Fetch notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(`http://localhost:8000/notes/${userId}`);
        const data = await res.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, [userId]);

  // 🔍 Filter notes
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      
      <h1 className="text-3xl font-black mb-6 text-center">
        Your Notes
      </h1>

      {/* 🔍 SEARCH */}
      <div className="max-w-xl mx-auto mb-8 relative">
        <FaSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search notes by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-xl"
        />
      </div>

      {/* 📄 NOTES LIST */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredNotes.length === 0 ? (
          <p className="text-center text-gray-500">No notes found</p>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow"
            >
              {/* 📄 Title */}
              <div>
                <h3 className="font-bold text-lg">{note.title}</h3>
                <p className="text-sm text-gray-400">
                  Note ID: {note.id}
                </p>
              </div>

              {/* ⬇️ Download Button */}
              <button
                onClick={() =>
                  window.open(
                    `http://localhost:8000/download/${note.id}`,
                    "_blank"
                  )
                }
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition"
              >
                <FaDownload />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;