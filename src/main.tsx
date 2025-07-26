import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error boundary and safe rendering for social media browsers
try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  // Create root and render with error handling
  const root = createRoot(rootElement);
  
  // Wrap in try-catch for React rendering errors
  try {
    root.render(<App />);
    
    // Hide loading fallback once React renders successfully
    setTimeout(() => {
      const fallback = document.getElementById('loading-fallback');
      if (fallback) {
        document.body.classList.add('react-loaded');
        fallback.style.display = 'none';
      }
    }, 100);
    
  } catch (renderError) {
    console.error('React rendering error:', renderError);
    // Fallback: show a basic error message
    rootElement.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: system-ui, sans-serif;
        text-align: center;
        padding: 20px;
      ">
        <img src="https://i.postimg.cc/BQP7QDjk/HSCian-20250725-225238-0000.png" 
             style="width: 80px; height: 80px; border-radius: 20px; margin-bottom: 20px;" 
             alt="HSCian Logo">
        <h1 style="font-size: 24px; margin-bottom: 10px;">HSCian</h1>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 20px;">Complete HSC Learning Package</p>
        <p style="font-size: 14px; opacity: 0.8;">সম্পূর্ণ এইচএসসি শিক্ষা প্যাকেজ</p>
        <button onclick="window.location.reload()" style="
          margin-top: 20px;
          padding: 12px 24px;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 8px;
          color: white;
          cursor: pointer;
          font-size: 16px;
        ">Reload App</button>
      </div>
    `;
  }
  
} catch (error) {
  console.error('Critical error initializing app:', error);
  
  // Last resort fallback - direct DOM manipulation
  const body = document.body;
  if (body) {
    body.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: system-ui, sans-serif;
        text-align: center;
        padding: 20px;
      ">
        <img src="https://i.postimg.cc/BQP7QDjk/HSCian-20250725-225238-0000.png" 
             style="width: 80px; height: 80px; border-radius: 20px; margin-bottom: 20px;" 
             alt="HSCian Logo">
        <h1 style="font-size: 24px; margin-bottom: 10px;">HSCian</h1>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 20px;">Complete HSC Learning Package</p>
        <p style="font-size: 14px; opacity: 0.8;">সম্পূর্ণ এইচএসসি শিক্ষা প্যাকেজ</p>
        <p style="font-size: 12px; opacity: 0.7; margin-top: 20px;">
          For best experience, please open in Chrome or other external browser
        </p>
      </div>
    `;
  }
}
