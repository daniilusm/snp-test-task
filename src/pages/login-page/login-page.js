import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../styles/components';
import { LoginBox, ErrorMessage, BoxItem, FormBox, Input, Label } from "./style";

export const LoginPage = () => {

	const schema = yup.object({
		userPassword: yup.string().min(4, 'Password must be more than 4 characters').required('Password is a required field'),
		userEmail: yup.string().email('Email must be exemple@exemple.com').required('Email is a required field'),
	}).required();

	const { register, formState: { errors }, reset, handleSubmit } = useForm({
		resolver: yupResolver(schema), mode: 'onChange'
	});
	const onSubmit = (data) => {
		console.log(data)
		reset();
	};

	return(
		<LoginBox>
			<FormBox onSubmit={handleSubmit(onSubmit)}>
				<BoxItem>
					<Label>Login</Label>
					<Input {...register("userEmail")} id="userEmail" type='email'/>
					<ErrorMessage>{errors.userEmail?.message}</ErrorMessage>
				</BoxItem>
				<BoxItem>
					<Label>Password</Label>
					<Input {...register("userPassword")} id="userPassword" type='text'/>
					<ErrorMessage>{errors.userPassword?.message}</ErrorMessage>
				</BoxItem>
				<Button type='submit'>Enter</Button>
			</FormBox>
		</LoginBox>
	)
}