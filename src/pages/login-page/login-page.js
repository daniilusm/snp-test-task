import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../../components/button';
import InputText from '../../components/input-text';
import ErrorMessage from '../../components/error-message';

import { autorizUser, getUser } from '../../store/actions/user';

import {
	LoginBox,
	BoxItem,
	FormBox,
} from './style';
import { ButtonBox, Heading } from '../../styles/GlobalStyles';

export const LoginPage = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const schema = yup
		.object({
			password: yup
				.string()
				.min(4, 'Password must be more than 4 characters')
				.required('Password is a required field'),
			username: yup
				.string()
				.min(4, 'Password must be more than 4 characters')
				.required('User name is a required field'),
		})
		.required();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const goToTestsList = useCallback(() => navigate('/tests'));

	const onSubmit = (data) => {
		dispatch(autorizUser(data));
		setTimeout(() => {
			dispatch(getUser());
			goToTestsList();
		},1000);
	};

	return (
		<LoginBox>
			<Heading>Login</Heading>
			<FormBox onSubmit={handleSubmit(onSubmit)}>
				<BoxItem>
					<InputText register={register} name={'username'} label={'User name'} id={'username'} type={'text'} />
					<ErrorMessage>{errors.username?.message}</ErrorMessage>
				</BoxItem>
				<BoxItem>
					<InputText register={register} name={'password'} label={'Password'} id={'password'} type={'text'} />
					<ErrorMessage>{errors.password?.message}</ErrorMessage>
				</BoxItem>
				<ButtonBox>
					<Button styleColor={'primary'} type={'submit'}>Enter</Button>
					<Link to={'/registation'}>
						<Button styleColor={'primary'}>Registration</Button>
					</Link>
				</ButtonBox>
			</FormBox>
		</LoginBox>
	);
};
