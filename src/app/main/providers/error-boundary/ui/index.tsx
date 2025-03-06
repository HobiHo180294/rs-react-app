import { ERRORS } from '@/shared/constants';
import { Children } from '@/shared/types';
import { ErrorMessage } from '@/shared/ui/error-message/ui';
import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryState } from '../model';

export default class ErrorBoundary extends Component<
  Children,
  ErrorBoundaryState
> {
  constructor(props: Children) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`${ERRORS.INFO}:`, error.message, info);
  }

  render() {
    const { error } = this.state;
    return error ? (
      <ErrorMessage errorText={error.message} />
    ) : (
      this.props.children
    );
  }
}
