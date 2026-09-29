"use client";

import { useRef, type KeyboardEvent, type ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  label: string;
  value: string;
  onChange: (id: string) => void;
  idPrefix: string;
}

export function Tabs({ items, label, value, onChange, idPrefix }: TabsProps) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const select = (index: number) => {
    const next = (index + items.length) % items.length;
    onChange(items[next].id);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const moves: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: items.length - 1,
    };

    const target = moves[event.key];

    if (target === undefined) {
      return;
    }

    event.preventDefault();
    select(target);
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      className="flex flex-wrap justify-center gap-2"
    >
      {items.map((item, index) => {
        const selected = item.id === value;

        return (
          <button
            key={item.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            role="tab"
            id={`${idPrefix}-tab-${item.id}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel-${item.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              "rounded-pill border px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
              selected
                ? "border-primaryDark bg-primaryDark text-white"
                : "border-line bg-white text-muted hover:border-primary hover:text-primary",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function TabPanel({
  id,
  idPrefix,
  labelledBy,
  children,
}: {
  id: string;
  idPrefix: string;
  labelledBy: string;
  children: ReactNode;
}) {
  return (
    <div
      role="tabpanel"
      id={`${idPrefix}-panel-${id}`}
      aria-labelledby={labelledBy}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
