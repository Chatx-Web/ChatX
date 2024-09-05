import Button from "../reusable/button";

export default function HomeHeader() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:text-left">
        <h1 className="text-xl font-medium tracking-wide lg:text-5xl lg:w-[400px] lg:leading-[60px]">
          Elevate Your Chats. Amplify Your Connections.
        </h1>
        <div className="space-y-8">
          <p className="text-sm lg:w-[275px]">
            Distance disappears, connections flourish. Chad.ct transforms
            interaction—reconnect, forge new bonds. Every chat an adventure.
            Join now, unlock endless possibilities!
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Button variant="primary" className="py-2">
              Start chatting
            </Button>
            <Button variant="primary" className="py-2">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="w-full h-full lg:w-3/4"
          src="/chatx-chat-page.png"
          alt="chatx-chat-page"
        />
      </div>
    </>
  );
}
