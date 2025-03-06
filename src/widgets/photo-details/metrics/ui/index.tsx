import { MetricDisplay } from '@/entities/metric-display/ui';
import { THREE_ITEMS as DUMMY_METRICS } from '@/shared/constants';
import { PhotoDetailsMetricsProps } from '../model';

export const PhotoDetailsMetrics = ({ metrics }: PhotoDetailsMetricsProps) => {
  if (Array.isArray(metrics) && !metrics.length) return null;

  return (
    <ul className="flex justify-between py-4 border-t border-b border-gray-200">
      {(metrics || DUMMY_METRICS).map((metric, index) => (
        <li key={metric?.id || index}>
          <MetricDisplay {...metric} />
        </li>
      ))}
    </ul>
  );
};
