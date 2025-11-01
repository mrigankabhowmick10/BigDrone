import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Network, Cpu, Radio, Database } from "lucide-react";

const ecosystemItems = [
  {
    icon: Network,
    title: "Partnership Network",
    description: "Collaborating with conservation organizations worldwide",
  },
  {
    icon: Cpu,
    title: "AI Models",
    description: "State-of-the-art computer vision and species recognition",
  },
  {
    icon: Radio,
    title: "Sensor Technology",
    description: "Multispectral and thermal imaging sensors",
  },
  {
    icon: Database,
    title: "Data Sources",
    description: "Integration with global biodiversity databases",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-background">
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
            data-testid="text-ecosystem-title"
          >
            Our Ecosystem
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-ecosystem-subtitle"
          >
            Built on a foundation of cutting-edge technology and global
            collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="p-6 md:p-8 text-center h-full hover-elevate"
                data-testid={`card-ecosystem-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon
                    className="w-7 h-7 text-primary"
                    data-testid={`icon-ecosystem-${index + 1}`}
                  />
                </div>
                <h3
                  className="text-xl font-semibold text-foreground mb-3"
                  data-testid={`text-ecosystem-${index + 1}-title`}
                >
                  {item.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid={`text-ecosystem-${index + 1}-description`}
                >
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
