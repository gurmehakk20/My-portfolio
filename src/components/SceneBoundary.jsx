import { Component } from 'react';

/**
 * Keeps a failed lazy chunk (e.g. a stale chunk after a redeploy) or a WebGL/model error from unmounting
 * the whole page — renders `fallback` instead and reports via `onError`.
 */
class SceneBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error('3D scene failed to load:', error);
    this.props.onError?.(error);
  }

  render() {
    return this.state.failed ? (this.props.fallback ?? null) : this.props.children;
  }
}

export default SceneBoundary;
