import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Plane, Camera, Brain, FileText } from "lucide-react";

const steps = [
  {
    icon: Plane,
    title: "Drone Flight",
    description: "Autonomous drone deployment across designated monitoring zones",
  },
  {
    icon: Camera,
    title: "Image Capture",
    description: "High-resolution aerial photography and multispectral imaging",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Advanced computer vision and machine learning processing",
  },
  {
    icon: FileText,
    title: "Report Generation",
    description: "Comprehensive biodiversity insights and actionable data",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
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
            data-testid="text-how-it-works-title"
          >
            How It Works
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-how-it-works-subtitle"
          >
            Our streamlined process transforms aerial data into actionable
            environmental insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="p-6 md:p-8 text-center h-full flex flex-col items-center hover-elevate"
                data-testid={`card-step-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon
                    className="w-7 h-7 text-primary"
                    data-testid={`icon-step-${index + 1}`}
                  />
                </div>
                <h3
                  className="text-xl font-semibold text-foreground mb-3"
                  data-testid={`text-step-${index + 1}-title`}
                >
                  {step.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid={`text-step-${index + 1}-description`}
                >
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
