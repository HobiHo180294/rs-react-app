import { ERRORS } from '@/shared/constants';
import { ErrorMessage } from '@/widgets';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`${ERRORS.INFO}:`, error.message, info);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;
    return error ? <ErrorMessage error={error.message} /> : children;
  }
}
