import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './login-page';
import RegisterPage from './register-page';
import WorkOnTestPage from './work-on-test-page';
import TestsListPage from './tests-list-page';
import TestPage from './test-page';


export const Routers = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/registration" element={<RegisterPage />} />
			<Route path="/test/:id/edit" element={<WorkOnTestPage />} />
			<Route path="/test/:id" element={<TestPage />} />
			<Route path="/" element={<TestsListPage />} />
		</Routes>
	);
};
