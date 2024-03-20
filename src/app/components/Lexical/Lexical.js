import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical";
import ToolbarPlugin from "../plugins/ToolbarPlugin";

const initialConfig = {
  theme: {},
  onError(error) {
    console.error(error);
  },
  editorState: (editor) => {
    const initialText = "Some kind of template";
    const paragraphNode = $createParagraphNode();
    const textNode = $createTextNode(initialText);
    paragraphNode.append(
      $createTextNode("This is a demo environment built with "),
      $createTextNode("lexical").toggleFormat("code"),
      $createTextNode("."),
      $createTextNode(" Try typing in "),
      $createTextNode("some text").toggleFormat("bold"),
      $createTextNode(" with "),
      $createTextNode("different").toggleFormat("italic"),
      $createTextNode(" formats.")
    );

    editor.update(() => {
      const root = $getRoot();
      root.append(paragraphNode);
    });
  },
};

const MyEditor = () => (
  <LexicalComposer initialConfig={initialConfig}>
    <div className="editor-container">
      <ToolbarPlugin />
      <RichTextPlugin />
      <HistoryPlugin />
      <ContentEditable className="editor-content" />
    </div>
  </LexicalComposer>
);

export default MyEditor;
