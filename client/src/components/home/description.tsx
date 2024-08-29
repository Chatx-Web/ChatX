import Button from "../reusable/button";

export default function HomeDescription() {
  return (
    <div className="space-y-8">
      <p className="text-sm w-[275px]">
        Distance disappears, connections flourish. Chad.ct transforms
        interaction—reconnect, forge new bonds. Every chat an adventure. Join
        now, unlock endless possibilities!{" "}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="primary" className="py-1 px-2">
          Start chatting
        </Button>
        <Button variant="primary" className="py-1 px-2">
          Learn more
        </Button>
      </div>
    </div>
  );
}
