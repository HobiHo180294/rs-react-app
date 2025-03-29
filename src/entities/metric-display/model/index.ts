import { HTMLAttributes } from 'react';

export interface MetricDisplayProps extends HTMLAttributes<HTMLDivElement> {
  quantity?: number;
}
