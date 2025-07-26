import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '20px'
        }}>
          <img 
            src="https://i.postimg.cc/BQP7QDjk/HSCian-20250725-225238-0000.png" 
            alt="HSCian Logo"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              marginBottom: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}
          />
          <h1 style={{ fontSize: '24px', marginBottom: '10px', fontWeight: 'bold' }}>
            HSCian
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '20px' }}>
            Complete HSC Learning Package
          </p>
          <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>
            সম্পূর্ণ এইচএসসি শিক্ষা প্যাকেজ
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            Reload App
          </button>
          <p style={{ 
            fontSize: '12px', 
            opacity: 0.7, 
            marginTop: '20px',
            maxWidth: '300px'
          }}>
            If you're using Facebook app, please open in Chrome or other external browser for best experience.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}