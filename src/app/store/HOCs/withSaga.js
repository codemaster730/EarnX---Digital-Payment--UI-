import React from 'react';
import { sagaMiddleware } from '..'

const withSaga = (saga) => WrappedComponent => {
    sagaMiddleware.run(saga);

    return (props) => (
        <WrappedComponent {...props} />
    )
};

export default withSaga;
