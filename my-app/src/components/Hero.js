import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

function Hero() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Track mouse position
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 4500);
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: 'rgba(108, 99, 255, 0.5)' // match your primary color with transparency
        });
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
        
        // Interaction with cursor
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRef.current.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          
          particle.x -= forceDirectionX * force * 2;
          particle.y -= forceDirectionY * force * 2;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Rohan Yelandur</span></h1>
        <p className="hero-subtitle">Software Engineer | AI Enthusiast | Problem Solver</p>
        <p className="hero-description">I create meaningful applications to solve real problems.</p>
      </div>
    </section>
  );
}

export default Hero;