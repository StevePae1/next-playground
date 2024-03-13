"use client";
import React, { useState, useEffect } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import styles from "./DraftJs.module.css";

const DraftJs = ({ initialContent }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // useEffect(() => {
  //   if (initialContent) {
  //     const contentState = convertFromRaw(initialContent);
  //     setEditorState(EditorState.createWithContent(contentState));
  //   }
  // }, [initialContent]);
  // const onEditorStateChange = (newState) => {
  //   setEditorState(newState);
  // };
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>Below is Draft-js</header>
      <Editor
        // editorState={editorState}
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};

export default DraftJs;
