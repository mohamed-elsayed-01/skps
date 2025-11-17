"use client";

import { useState } from "react";
import { FEATURES } from "../../constants";
import FeatureCard from "./feature-card";
import { useInterval } from "../../hooks/useInterval";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useInterval(() => {
    setActiveIndex((prev) => (prev + 1) % FEATURES.length);
  }, 3000);

  const RENDER_FEATURES = FEATURES.map((item, index) => (
    <FeatureCard key={item.id} {...item} isActive={activeIndex === index} />
  ));

  return <div className="flex justify-center gap-1">{RENDER_FEATURES}</div>;
};

export default Features;
