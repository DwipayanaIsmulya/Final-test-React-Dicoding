import React from "react";
import { getInitialData } from "../utils/index";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import NoteSearch from "./NoteSearch";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchValue: "",
      onArchived: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onPindahHandler = this.onPindahHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onPindahHandler(id) {
    const getId = this.state.notes.filter((note) => note.id == id);
    if (getId[0].archived === false) {
      getId[0].archived = true;
    } else {
      getId[0].archived = false;
    }
    this.setState(() => {
      return {
        onArchived: true,
      };
    });
    console.log(getId);
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        searchValue: event.target.value,
      };
    });
  }

  onAddNoteHandler({ title, body, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="notesApp" id="notesApp">
        <h1>NotesApp</h1>
        <NoteSearch searchHandler={this.onSearchHandler} />
        <h2>Add Notes</h2>
        <NotesInput addNote={this.onAddNoteHandler} />
        <h2>My Notes</h2>
        <NotesList
          notes={this.state.notes.filter(
            (note) =>
              note.archived == false &&
              note.title.toLowerCase().includes(this.state.searchValue)
          )}
          date={this.state.notes.map((note) => note.createdAt)}
          onDelete={this.onDeleteHandler}
          onPindah={this.onPindahHandler}
        />
        <br />
        <h2>Archive</h2>
        <NotesList
          notes={this.state.notes.filter(
            (note) =>
              note.archived == true &&
              note.title.toLowerCase().includes(this.state.searchValue)
          )}
          date={this.state.notes.map((note) => note.createdAt)}
          onDelete={this.onDeleteHandler}
          onPindah={this.onPindahHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
