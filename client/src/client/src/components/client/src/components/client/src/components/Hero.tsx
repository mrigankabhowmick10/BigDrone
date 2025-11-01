import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Misty_forest_mountain_background_8450314a.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
            data-testid="text-hero-title"
          >
            BioDrone
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-12"
          data-testid="text-hero-subtitle"
        >
          AI-powered Drone Platform for Biodiversity Monitoring and Ecosystem
          Analysis
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            data-testid="button-hero-launch-app"
          >
            Launch App
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="backdrop-blur-sm bg-background/20 border-foreground/30 text-foreground hover:bg-background/40 px-8 py-6 text-lg"
            data-testid="button-hero-whitepaper"
          >
            Read Whitepaper
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
