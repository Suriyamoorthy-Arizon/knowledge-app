"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";

interface Props {
  content: string;
  onChange: (value: string) => void;
}

export default function TiptapEditor({
  content,
  onChange,
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Write your article content here...",
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="rounded-md border">
      <div className="flex flex-wrap gap-2 border-b p-3">
        <button
          type="button"
          className="rounded border px-3 py-1 text-sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </button>

        <button
          type="button"
          className="rounded border px-3 py-1 text-sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>

        <button
          type="button"
          className="rounded border px-3 py-1 text-sm"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          Underline
        </button>

        <button
          type="button"
          className="rounded border px-3 py-1 text-sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          Bullet List
        </button>

        <button
          type="button"
          className="rounded border px-3 py-1 text-sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          Number List
        </button>

        <button
          type="button"
          className="rounded border px-3 py-1 text-sm"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          Code
        </button>
      </div>

      <EditorContent
        editor={editor}
        className="min-h-[350px] p-4"
      />
    </div>
  );
}