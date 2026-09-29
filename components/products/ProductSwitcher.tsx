"use client";

import { useState, type ReactNode } from "react";

import { TabPanel, Tabs, type TabItem } from "@/components/Tabs";

interface ProductSwitcherProps {
  tabs: TabItem[];
  panels: ReactNode[];
  label: string;
}

export function ProductSwitcher({ tabs, panels, label }: ProductSwitcherProps) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const activeIndex = Math.max(
    tabs.findIndex((tab) => tab.id === activeId),
    0,
  );
  const active = tabs[activeIndex];

  return (
    <div>
      <Tabs
        items={tabs}
        label={label}
        value={activeId}
        onChange={setActiveId}
        idPrefix="venture"
      />

      <TabPanel
        id={active.id}
        idPrefix="venture"
        labelledBy={`venture-tab-${active.id}`}
      >
        {panels[activeIndex]}
      </TabPanel>
    </div>
  );
}
