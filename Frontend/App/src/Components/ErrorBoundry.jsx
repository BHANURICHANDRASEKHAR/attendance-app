import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to render fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information to an error reporting service or console
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI to render if an error occurs
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    // Render children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
