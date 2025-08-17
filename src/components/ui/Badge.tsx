interface Badgeprop {
  text: string;
}

export default function Badge({ text }: Badgeprop) {
  return (
    <div className="inline-flex py-1 px-3 rounded-full text-black border border-black/30 font-semibold">
      {text}
    </div>
  );
}
