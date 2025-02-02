import { ERRORS } from '@/shared/constants';
import { Component } from 'react';

interface Props {
  error: string;
  helperText?: string;
}

export class ErrorMessage extends Component<Props> {
  render() {
    const { error, helperText } = this.props;

    return (
      <div className="bg-red-50 border border-red-500 text-red-900 px-4 py-3">
        <div className="font-bold">{helperText || ERRORS.UNKNOWN}</div>
        <pre className="text-sm">{error}</pre>
      </div>
    );
  }
}
