import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.svg" alt="PlanBudowlany" width={48} height={48} />
      <div className="hidden sm:flex flex-col leading-tight">
        <span
          className="text-lg font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          Plan
        </span>
        <span
          className="text-lg font-bold"
          style={{ color: 'var(--text-primary)' }}
        >
          Budowlany
        </span>
      </div>
    </div>
  );
};

export default Logo;