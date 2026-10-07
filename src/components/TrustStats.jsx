import React, { useEffect, useState } from 'react';
import { Building2, Layers, Briefcase, Cog, ShieldCheck } from 'lucide-react';
import './TrustStats.css';

const STATS_DATA = [
  {
    id: 'exp',
    icon: Building2,
    number: 15,
    suffix: '+',
    label: 'YEARS OF EXPERIENCE',
  },
  {
    id: 'projects',
    icon: Layers,
    number: 250,
    suffix: '+',
    label: 'PROJECTS DELIVERED',
  },
  {
    id: 'clients',
    icon: Briefcase,
    number: 120,
    suffix: '+',
    label: 'ENTERPRISE CLIENTS',
  },
  {
    id: 'assets',
    icon: Cog,
    number: 300,
    suffix: '+',
    label: 'ENGINEERING ASSETS',
  },
  {
    id: 'delivery',
    icon: ShieldCheck,
    number: 98,
    suffix: '%',
    label: 'ON-TIME PROJECT DELIVERY',
  },
];

function StatCounter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const duration = 1800; // ms

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return (
    <span className="stat-value">
      {count}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
}

export default function TrustStats() {
  return (
    <div className="trust-stats-wrapper">
      <div className="trust-stats-dock">
        {STATS_DATA.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.id}>
              <div className="stat-item">
                <div className="stat-icon-box">
                  <Icon size={28} className="stat-icon" strokeWidth={2.2} />
                </div>
                <div className="stat-content">
                  <StatCounter target={item.number} suffix={item.suffix} />
                  <span className="stat-label">{item.label}</span>
                </div>
              </div>
              {index < STATS_DATA.length - 1 && <div className="stat-divider" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
