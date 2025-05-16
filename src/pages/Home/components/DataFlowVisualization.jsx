import React, { useEffect, useRef } from 'react';

const DataFlowVisualization = ({ style = {} }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Configuration
    const config = {
      nodeCount: 150,
      maxConnections: 4,
      connectionDistance: 120,
      nodeSize: 1,
      speed: 0.3,
      colors: ['#00fff7', '#39ff14', '#00aaff']
    };
    
    // Nodes array
    let nodes = [];
    
    // Node class
    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
        this.size = config.nodeSize + Math.random() * 3;
        this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
        this.connections = [];
      }
      
      update() {
        // Move node
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        
        // Reset connections for this frame
        this.connections = [];
      }
      
      draw() {
        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Initialize nodes
    function init() {
      nodes = [];
      for (let i = 0; i < config.nodeCount; i++) {
        nodes.push(new Node());
      }
    }
    
    // Check and draw connections between nodes
    function drawConnections() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < config.connectionDistance && 
              nodes[i].connections.length < config.maxConnections && 
              nodes[j].connections.length < config.maxConnections) {
            
            // Add connection
            nodes[i].connections.push(nodes[j]);
            nodes[j].connections.push(nodes[i]);
            
            // Draw connection line
            const opacity = 1 - (distance / config.connectionDistance);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(100, 100, 100, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      // Clear canvas with slight fade effect
      ctx.fillStyle = '#f5f5f7';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });
      
      // Draw connections
      drawConnections();
      
      requestAnimationFrame(animate);
    }
    
    // Handle container resize
    const handleResize = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    // Set initial size
    handleResize();
    
    // Start animation
    init();
    const animationId = requestAnimationFrame(animate);
    
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        ...style
      }}
    />
  );
};

export default DataFlowVisualization;