"use client";
import EmojiPicker from "emoji-picker-react";
import React from "react";

function Imoji({ children, setEmijiIcon }: any) {
  const [imojiPicker, setImojiPicker] = React.useState(false);
  return (
    <div>
      <div onClick={() => setImojiPicker(!imojiPicker)}>{children}</div>
      {imojiPicker && (
        <div className="absolute z-10">
          <EmojiPicker 
            onEmojiClick={(emojiObject: any) => {
              setEmijiIcon(emojiObject.emoji);
              setImojiPicker(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Imoji;
