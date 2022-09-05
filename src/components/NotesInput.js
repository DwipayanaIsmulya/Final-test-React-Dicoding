import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      archived: false,
      sisaChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      if (event.target.value.length <= 50) {
        return {
          title: event.target.value,
        };
      } else {
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form
        className="notes-input"
        id="notes-input"
        onSubmit={this.onSubmitEventHandler}
      >
        <p>Sisa Karakter : {this.state.sisaChar - this.state.title.length}</p>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          autoComplete="off"
          required
        />
        <textarea
          type="text"
          placeholder="Body"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          autoComplete="off"
          required
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NotesInput;
