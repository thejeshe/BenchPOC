import React, { Suspense } from 'react';

const FormBuilder = React.lazy(() => import('./FormBuilder'));

const App = () => {
    return <Suspense fallback={<div>Loading...</div>}>
        <h1>sai rama</h1>
        <FormBuilder />
    </Suspense>
};

export default App;
