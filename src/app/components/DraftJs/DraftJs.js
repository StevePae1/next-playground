"use client";
import React, { useState, useEffect } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import styles from "./DraftJs.module.css";

const DraftJs = ({ initialContent }) => {
  const createEditorStateFromInitialContent = (initialContent) => {
    if (initialContent) {
      const contentState = convertFromRaw(initialContent);
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  };

  const [editorState, setEditorState] = useState(() =>
    createEditorStateFromInitialContent(initialContent)
  );

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>Below is Draft-js</header>
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
      />
    </div>
  );
};

export default DraftJs;
