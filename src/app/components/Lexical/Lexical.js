import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "../plugins/ToolbarPlugin";
import TreeViewPlugin from "../plugins/TreeViewPlugin";
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import { $createParagraphNode, $createTextNode } from "lexical";

const theme = {};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

// const initialEditorState = await loadContent();

function Lexical(props) {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    //  {editorState: initialEditorState}
  };
  // const [editor] = useLexicalComposerContext();
  const { contentEditable, placeHolder, editorReadyCallback } = props;
  const initialText = "Hello, this is the initial text!";
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "MyEditor",
        theme,
        onError,
      }}
    >
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={<ContentEditable className="mainBox" />}
        placeholder={<div>Enter some text above to use Lexical...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      {/* <EditorWithDirectManipulation /> */}
      <HistoryPlugin />
      <AutoFocusPlugin />
      <TreeViewPlugin />
    </LexicalComposer>
  );
}

export default Lexical;
