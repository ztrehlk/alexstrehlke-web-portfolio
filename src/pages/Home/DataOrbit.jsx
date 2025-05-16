import React, { useEffect, useRef } from 'react';
import './DataOrbit.css';

const DataOrbit = ({ targetElement }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current || !targetElement?.current) return;

    const container = containerRef.current;
    const target = targetElement.current;
    const nodeCount = 15;
    const nodes = [];
    const connections = [];
    
    // Function to get target position
    const getTargetPosition = () => {
      const rect = target.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + rect.height / 2 + window.scrollY
      };
    };
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.className = 'data-node';
      
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 80; // Reduced distance
      const targetPos = getTargetPosition();
      const x = targetPos.x + Math.cos(angle) * distance;
      const y = targetPos.y + Math.sin(angle) * distance;
      
      const size = 4 + Math.random() * 6;
      
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      
      nodes.push({
        element: node,
        x, y,
        targetX: x,
        targetY: y,
        size,
        speed: 0.5 + Math.random() * 1.5,
        angle: Math.random() * Math.PI * 2,
        baseX: targetPos.x,
        baseY: targetPos.y
      });
      
      container.appendChild(node);
    }
    
    // Create connections between nodes
    function createConnections() {
      // Clear existing connections
      connections.forEach(conn => {
        if (conn.element.parentNode) {
          container.removeChild(conn.element);
        }
      });
      connections.length = 0;
      
      // Create new connections based on proximity
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const connection = document.createElement('div');
            connection.className = 'data-connection';
            
            const opacity = 1 - distance / 200;
            connection.style.opacity = opacity;
            
            connections.push({
              element: connection,
              node1: nodes[i],
              node2: nodes[j]
            });
            
            container.appendChild(connection);
          }
        }
      }
    }
    
    // Update connections positions
    function updateConnections() {
      connections.forEach(conn => {
        const dx = conn.node1.x - conn.node2.x;
        const dy = conn.node1.y - conn.node2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const angle = Math.atan2(dy, dx);
        
        conn.element.style.width = `${distance}px`;
        conn.element.style.left = `${conn.node2.x}px`;
        conn.element.style.top = `${conn.node2.y}px`;
        conn.element.style.transform = `rotate(${angle}rad)`;
        
        const opacity = 1 - distance / 200;
        conn.element.style.opacity = opacity > 0 ? opacity : 0;
      });
    }
    
    // Animation loop
    let animationId;
    function animate() {
      const targetPos = getTargetPosition();
      
      // Move nodes in gentle circular patterns
      nodes.forEach(node => {
        // Update base position to follow target
        node.baseX = targetPos.x;
        node.baseY = targetPos.y;
        
        // Update angle for circular motion
        node.angle += 0.005 * node.speed;
        
        // Calculate target position in a circular path
        node.targetX = node.baseX + Math.cos(node.angle) * (80 + Math.sin(node.angle * 0.5) * 30);
        node.targetY = node.baseY + Math.sin(node.angle) * (80 + Math.cos(node.angle * 0.3) * 30);
        
        // Smooth movement toward target
        node.x += (node.targetX - node.x) * 0.05;
        node.y += (node.targetY - node.y) * 0.05;
        
        // Update DOM element position
        node.element.style.left = `${node.x}px`;
        node.element.style.top = `${node.y}px`;
        
        const pulse = 1 + Math.sin(Date.now() * 0.002 * node.speed) * 0.2;
        node.element.style.transform = `translate(-50%, -50%) scale(${pulse})`;
      });
      
      updateConnections();
      animationId = requestAnimationFrame(animate);
    }    
    // Initialize connections and start animation
    createConnections();
    animate();
    
    // Handle window resize
    const handleResize = () => {
      createConnections();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      // Remove all nodes and connections
      nodes.forEach(node => {
        if (node.element.parentNode) {
          container.removeChild(node.element);
        }
      });
      connections.forEach(conn => {
        if (conn.element.parentNode) {
          container.removeChild(conn.element);
        }
      });
    };
  }, [targetElement]);

  return (
    <div className="data-orbit-wrapper">
      <div ref={containerRef} className="data-orbit-container"></div>
    </div>
  );
};

export default DataOrbit;