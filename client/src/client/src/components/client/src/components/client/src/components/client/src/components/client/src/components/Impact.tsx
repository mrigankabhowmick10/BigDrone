import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trees, MapPin, Leaf } from "lucide-react";

const impacts = [
  {
    icon: Trees,
    title: "Biodiversity Health",
    description: "Track species diversity and ecosystem vitality",
    metric: "95%",
    label: "Accuracy",
  },
  {
    icon: MapPin,
    title: "Forest Density Mapping",
    description: "Monitor deforestation and reforestation efforts",
    metric: "1M+",
    label: "Hectares Mapped",
  },
  {
    icon: Leaf,
    title: "Carbon Footprint",
    description: "Measure carbon sequestration and offset tracking",
    metric: "2.5M",
    label: "Tons CO₂ Tracked",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-impact-title"
          >
            Environmental Impact
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-impact-subtitle"
          >
            Driving measurable change through data-driven conservation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="p-8 text-center h-full hover-elevate"
                data-testid={`card-impact-${index + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <impact.icon
                    className="w-8 h-8 text-primary"
                    data-testid={`icon-impact-${index + 1}`}
                  />
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-2"
                  data-testid={`text-impact-${index + 1}-title`}
                >
                  {impact.title}
                </h3>
                <p
                  className="text-muted-foreground mb-6"
                  data-testid={`text-impact-${index + 1}-description`}
                >
                  {impact.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <div
                    className="text-3xl font-bold text-primary mb-1"
                    data-testid={`text-impact-${index + 1}-metric`}
                  >
                    {impact.metric}
                  </div>
                  <div
                    className="text-sm text-muted-foreground"
                    data-testid={`text-impact-${index + 1}-label`}
                  >
                    {impact.label}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
