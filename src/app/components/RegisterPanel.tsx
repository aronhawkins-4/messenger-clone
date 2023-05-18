'use client';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { Button } from './Button';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import { Input } from './Input';

export const RegisterPanel = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className='flex flex-col gap-4'>
			<Button
				outline
				label='Sign up with GitHub'
				icon={AiFillGithub}
				onClick={() => {
					signIn('github');
				}}
			/>
		</div>
	);
};
