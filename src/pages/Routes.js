import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './login-page';
import RegisterPage from './register-page';
import WorkOnTestPage from './work-on-test-page';
import TestsListPage from './tests-list-page';


export const Routers = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/registration" element={<RegisterPage />} />
			<Route path="/test/edit" element={<WorkOnTestPage />} />
			<Route path="/tests" element={<TestsListPage />} />
		</Routes>
	);
};
