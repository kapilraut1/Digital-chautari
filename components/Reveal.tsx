"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  as?: "div" | "li" | "article";
}

const transition =
  "motion-safe:transition-[opacity,transform,box-shadow] motion-safe:duration-500 motion-safe:ease-out";
const hidden = "motion-safe:opacity-0 motion-safe:translate-y-4";

export function Reveal({
  children,
  delay = 0,
  className,
  id,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
          window.setTimeout(() => {
            node.style.transitionDelay = "";
          }, delay + 500);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref as never}
      id={id}
      style={style}
      className={cn(
        transition,
        visible ? "translate-y-0 opacity-100" : hidden,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
