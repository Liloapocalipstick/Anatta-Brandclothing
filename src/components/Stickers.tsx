const stickers = [
  { emoji: "✨", position: "top-10 left-10", type: "glitter" },
  { emoji: "🌟", position: "top-20 right-20", type: "holographic" },
  { emoji: "💎", position: "bottom-20 left-16", type: "glitter" },
  { emoji: "🔮", position: "top-40 left-1/4", type: "holographic" },
  { emoji: "⭐", position: "bottom-32 right-24", type: "glitter" },
  { emoji: "🌈", position: "top-60 right-1/3", type: "holographic" },
  { emoji: "💫", position: "bottom-40 left-1/3", type: "glitter" },
  { emoji: "🦄", position: "top-32 right-12", type: "holographic" }
];

export function Stickers() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className={`
            absolute text-2xl select-none
            ${sticker.position}
            ${sticker.type === 'glitter' ? 'glitter-effect' : 'holographic'}
          `}
        >
          {sticker.emoji}
        </div>
      ))}
    </div>
  );
}