import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from './_services/store/store.tsx';
import App from './_ui/App.tsx';

const ROOT_ELEMENT_ID = 'root';
const rootElement = document.getElementById(ROOT_ELEMENT_ID);

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <Provider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
            ,
        </Provider>,
    );
} else {
    console.error(`Element with ID '${ROOT_ELEMENT_ID}' not found.`);
}
