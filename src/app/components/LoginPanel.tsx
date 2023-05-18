'use client';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Button } from './Button';
import { useRouter } from 'next/navigation';
import { Input } from './Input';

export const LoginPanel = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className='w-full flex flex-col gap-2'>
			<div className='text-2xl font-semibold'>Please login</div>
			<Button
				outline
				label='Login with GitHub'
				icon={AiFillGithub}
				onClick={() => {
					signIn('github');
				}}
			/>
			<Button
				outline
				label='Login with Google'
				icon={AiFillGoogleCircle}
				onClick={() => {
					signIn('google');
				}}
			/>
		</div>
	);
};
