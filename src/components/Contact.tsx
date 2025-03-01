
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const titleRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      toast({
        title: "Message sent",
        description: "Thank you! I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="section-container">
        <div 
          className="text-center max-w-3xl mx-auto mb-16 opacity-0"
          ref={titleRef as React.RefObject<HTMLDivElement>}
        >
          <div className="chip mb-4">Get In Touch</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-foreground/80 text-balance">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div 
            className="lg:col-span-3 opacity-0"
            ref={formRef as React.RefObject<HTMLDivElement>}
          >
            <div className="card-glass p-8">
              <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                    placeholder="Hi, I'd like to talk about..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary button-hover-effect flex items-center justify-center w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div 
            className="lg:col-span-2 opacity-0"
            ref={infoRef as React.RefObject<HTMLDivElement>}
          >
            <div className="card-glass p-8 h-full">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground/80 mb-1">Email</h4>
                    <a href="mailto:hello@example.com" className="text-foreground hover:text-primary transition-colors duration-200">
                      hello@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground/80 mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-foreground hover:text-primary transition-colors duration-200">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground/80 mb-1">Location</h4>
                    <p className="text-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-sm font-medium text-foreground/80 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-secondary/80 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-secondary/80 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-secondary/80 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-secondary/80 transition-colors duration-200"
                    aria-label="Dribbble"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
