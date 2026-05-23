import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, Stars, Gift } from "lucide-react";
import { useRef } from "react";

const queryClient = new QueryClient();

const FloatingElement = ({ children, delay, duration, yOffset, xOffset }: any) => (
  <motion.div
    animate={{
      y: [0, yOffset, 0],
      x: [0, xOffset, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className="absolute pointer-events-none opacity-40 text-primary/60"
  >
    {children}
  </motion.div>
);

function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [50, 0, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [50, 0, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [50, 0, 0]);
  
  const opacity4 = useTransform(scrollYProgress, [0.45, 0.55, 0.65], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.45, 0.55, 0.65], [50, 0, 0]);
  
  const opacity5 = useTransform(scrollYProgress, [0.6, 0.75, 0.85], [0, 1, 1]);
  const scale5 = useTransform(scrollYProgress, [0.6, 0.75, 0.85], [0.8, 1, 1]);

  return (
    <div ref={containerRef} className="min-h-[300vh] w-full relative overflow-hidden selection:bg-primary/20">
      
      {/* Decorative floating elements in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <FloatingElement delay={0} duration={8} yOffset={-30} xOffset={20}>
          <Heart className="w-8 h-8 absolute top-[10%] left-[10%]" />
        </FloatingElement>
        <FloatingElement delay={2} duration={10} yOffset={40} xOffset={-20}>
          <Sparkles className="w-12 h-12 absolute top-[30%] right-[15%]" />
        </FloatingElement>
        <FloatingElement delay={1} duration={7} yOffset={-50} xOffset={30}>
          <Stars className="w-10 h-10 absolute top-[60%] left-[20%]" />
        </FloatingElement>
        <FloatingElement delay={3} duration={9} yOffset={30} xOffset={-15}>
          <Heart className="w-6 h-6 absolute top-[80%] right-[25%]" />
        </FloatingElement>
        <FloatingElement delay={1.5} duration={11} yOffset={-40} xOffset={25}>
          <Gift className="w-10 h-10 absolute top-[40%] left-[80%]" />
        </FloatingElement>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 pt-32 pb-48">
        
        {/* Hero Section */}
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary font-bold tracking-tight mb-6">
              Happy Birthday,<br/>
              <span className="font-script text-7xl md:text-9xl lg:text-[10rem] text-foreground font-normal mt-4 block leading-none">Ammu!</span>
            </h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="mt-12 text-primary/60 flex flex-col items-center gap-4"
            >
              <span className="uppercase tracking-[0.3em] text-xs font-semibold">Scroll to read</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] h-16 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Message Sections */}
        <div className="space-y-[40vh] py-[10vh]">
          
          <motion.div 
            style={{ opacity: opacity1, y: y1 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90 font-serif">
              It feels only right to say at least something about what an <span className="text-primary italic">awesome individual</span> you are and how you fill everybody's life with happiness and warmth.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity2, y: y2 }}
            className="text-center max-w-3xl mx-auto relative"
          >
            <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-full -z-10" />
            <p className="text-3xl md:text-5xl leading-tight text-foreground font-serif font-medium">
              Indeed, you are an <span className="font-script text-5xl md:text-7xl text-primary px-2">angel on earth</span>; there is no other way to describe you but using such words.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity3, y: y3 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-foreground/90 font-serif">
              Seeing you develop and become the person you are is nothing but wonderful for me because of the <span className="text-primary font-semibold">unique magic and innocence</span> that come from deep within your pure soul.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity4, y: y4 }}
            className="text-center max-w-3xl mx-auto border-t border-b border-primary/20 py-16 relative"
          >
            <Heart className="absolute -top-4 left-1/2 -translate-x-1/2 text-primary/40 bg-background px-2 w-10 h-10" />
            <p className="text-xl md:text-3xl leading-relaxed text-foreground/80 font-sans font-medium">
              For your birthday, I wish you all of the good things you could ever wish for yourself, all the <span className="italic text-primary">ice creams and cakes</span> you can enjoy, lots of happiness, and laughter.
            </p>
            <p className="mt-8 text-2xl md:text-3xl text-foreground font-serif">
              No one will ever be able to take away from you the love and respect you get from people.
            </p>
            <Heart className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-primary/40 bg-background px-2 w-10 h-10" />
          </motion.div>

          {/* Closing Section */}
          <motion.div 
            style={{ opacity: opacity5, scale: scale5 }}
            className="text-center max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[60vh]"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-20 border-[1px] border-dashed border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-24 border-[1px] border-primary/10 rounded-full"
              />
              
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
                Enjoy your birthday, baby!
              </h2>
              <div className="font-script text-6xl md:text-8xl text-primary mt-4 py-4">
                ILY so much!
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;