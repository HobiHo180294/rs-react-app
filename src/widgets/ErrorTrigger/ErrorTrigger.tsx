import { ERRORS } from '@/shared/constants';
import { Component } from 'react';

interface State {
  isActive: boolean;
}

export class ErrorTrigger extends Component<unknown, State> {
  state = {
    isActive: false,
  };

  render() {
    if (this.state.isActive) throw new Error(ERRORS.MANUAL);

    return (
      <button
        className="button-error"
        onClick={() => this.setState({ isActive: true })}
      >
        Break the application
      </button>
    );
  }
}
