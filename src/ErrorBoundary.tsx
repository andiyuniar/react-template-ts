import React, { ErrorInfo, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

interface IState {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;

}

class ErrorBoundary extends React.Component<IProps, IState> {
    public state: IState = {
        hasError: false
    };

    /**
     * Update state so the next render will show the fallback UI
     * @param _ 
     * @returns derived state from error 
     */
    public static getDerivedStateFromError(_: Error): IState {
        return { hasError: true };
    }


    /**
     * Catch the error and put into log
     * @param error 
     * @param errorInfo 
     */
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if(this.state.hasError) {
            return ( 
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap'}}>
                        { this.state.error}
                        <br/>
                        { this.state.errorInfo?.componentStack }
                    </details>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;