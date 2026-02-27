import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
          <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 border border-red-100">
            <h1 className="text-4xl font-serif font-bold text-red-600 mb-6">Something went wrong</h1>
            <p className="text-gray-600 text-lg mb-8">
              We've encountered an unexpected error. Our team has been notified.
            </p>
            <div className="bg-red-50 rounded-2xl p-6 mb-8 overflow-auto max-h-64 border border-red-100">
              <p className="font-mono text-sm text-red-800 font-bold mb-2">
                {this.state.error && this.state.error.toString()}
              </p>
              <pre className="font-mono text-xs text-red-600/80 leading-relaxed">
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => window.location.reload()} 
                className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200"
              >
                Reload Page
              </button>
              <button 
                onClick={() => window.location.href = '/'} 
                className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
