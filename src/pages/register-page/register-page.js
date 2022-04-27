import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { registrUser } from '../../store/actions/user';

import Button from '../../components/button';
import InputText from '../../components/input-text';
import ErrorMessage from '../../components/error-message';
import Checkbox from '../../components/checkbox';

import {
	LoginBox,
	BoxItem,
	FormBox
} from './style';
import { Heading } from '../../styles/GlobalStyles';

export const RegisterPage = () => {

	const dispatch = useDispatch();

	const [value, setCheckbox] = useState(true);

	const schema = yup
		.object({
			password: yup
				.string()
				.min(4, 'Password must be more than 4 characters')
				.required('Password is a required field'),
			password_confirmation: yup
				.string()
				.oneOf([yup.ref('password'), null], 'Passwords must match'),
			username: yup
				.string()
				.min(4, 'User name must be more than 4 characters')
				.required('Email is a required field'),
		})
		.required();

	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});
	const onSubmit = (data) => {
		data.is_admin = value;
		dispatch(registrUser(data));
		reset();
	};
	
	return(
		<LoginBox>
			<Heading>Registration</Heading>
			<FormBox onSubmit={handleSubmit(onSubmit)}>
				<BoxItem>
					<InputText register={register} name={'username'} label={'User name'} id={'username'} type={'text'} />
					<ErrorMessage>{errors.username?.message}</ErrorMessage>
				</BoxItem>
				<BoxItem>
					<InputText register={register} name={'password'} label={'Password'} id={'password'} type={'text'} />
					<ErrorMessage>{errors.password?.message}</ErrorMessage>
				</BoxItem>
				<BoxItem>
					<InputText register={register} name={'password_confirmation'} label={'Password Confirmation'} id={'password_confirmation'} type={'text'} />
					<ErrorMessage>{errors.password_confirmation?.message}</ErrorMessage>
				</BoxItem>
				<Checkbox
					label="Admin"
					value={value}
					checked={value}
					onChange={() => setCheckbox(!value)}
				/>
				<Button styleColor={'primary'} type={'submit'}>Enter</Button>
			</FormBox>
		</LoginBox>
	);
};