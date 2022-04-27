import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../../components/button';
import InputText from '../../components/input-text';
import ErrorMessage from '../../components/error-message';

import { autorizUser } from '../../store/actions/user';

import {
	LoginBox,
	BoxItem,
	FormBox,
} from './style';
import { ButtonBox, Heading } from '../../styles/GlobalStyles';

export const LoginPage = () => {

	const dispatch = useDispatch();

	const schema = yup
		.object({
			password: yup
				.string()
				.required('Password is a required field'),
			username: yup
				.string()
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
	const onSubmit = (data) => {
		dispatch(autorizUser(data));
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
					<Button styleColor={'primary'}>Registration</Button>
				</ButtonBox>
			</FormBox>
		</LoginBox>
	);
};
