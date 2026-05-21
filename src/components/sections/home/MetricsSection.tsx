import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";

import { metrics } from "@/data/metrics";

export default function MetricsSection() {
  return (
    <section className="pb-32 pt-8">
      <Container>
        <div
          className="
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {metrics.map((metric) => (
            <MetricCard
              key={metric.title}
              badge={metric.badge}
              badgeColor={metric.badgeColor}
              icon={metric.icon}
              title={metric.title}
              description={metric.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}