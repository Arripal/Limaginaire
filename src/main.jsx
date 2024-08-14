import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Collection from './pages/Collection/Collection';

const router = createBrowserRouter([
	{ path: '/', element: <Landing /> },
	{ path: '/my-collection', element: <Collection /> },
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
