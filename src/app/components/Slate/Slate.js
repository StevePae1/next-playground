import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const SlateComponent = ({ initialContent }) => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState(
    initialContent || [
      {
        type: "paragraph",
        children: [{ text: "Select a template to start editing." }],
      },
    ]
  );

  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "This is SlateJss" }],
    },
  ];

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        onKeyDown={(event) => {
          if (event.key === "&") {
            // Prevent the ampersand character from being inserted.
            event.preventDefault();
            // Execute the `insertText` method when the event occurs.
            editor.insertText("and");
          }
        }}
      />
    </Slate>
  );
};

export default SlateComponent;
