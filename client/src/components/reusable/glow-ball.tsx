import { ComponentProps, useEffect, useRef } from "react";
import { cn } from "../../utils/cn";
import { createStyle } from "../../utils/create-style";

interface GlowBallProps extends ComponentProps<"div"> {
  variant?: keyof typeof GlowBallVariants;
  ballSize?: number;
  ballX?: number;
  ballY?: number;
  removeSizeX?: boolean;
  removeSizeY?: boolean;
}

enum GlowBallVariants {
  default = "bg-glow-ball-red",
  "red-dblue" = "bg-gradient-to-r from-glow-ball-red to-glow-ball-dark-blue",
  "dblue-red" = "bg-gradient-to-r from-glow-ball-dark-blue to-glow-ball-red",
  "lblue-dblue" = "bg-gradient-to-r from-glow-ball-light-blue to-glow-ball-dark-blue",
  "dblue-lblue" = "bg-gradient-to-r from-glow-ball-dark-blue to-glow-ball-light-blue",
}

export default function GlowBall({
  className,
  ref,
  ballSize = 166,
  ballX = 0,
  ballY = 0,
  removeSizeX,
  removeSizeY,
  variant = "default",
  ...rest
}: GlowBallProps) {
  const ballRef = useRef<HTMLDivElement>(null!);
  let animationId: number;
  let size = ballSize;
  let x = removeSizeX ? ballX - size : ballX;
  let y = removeSizeY ? ballY - size : ballY;

  useEffect(() => {
    function init() {
      createStyle(ballRef.current, {
        width: `${size}px`,
        height: `${size}px`,
      });
    }

    function draw() {
      createStyle(ballRef.current, {
        left: `${x}px`,
        top: `${y}px`,
      });
    }

    function update() {
      y--;
    }

    function animate() {
      draw();
      update();

      animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute rounded-lg blur-md",
        GlowBallVariants[variant],
        className
      )}
      ref={ballRef}
      {...rest}
    />
  );
}
