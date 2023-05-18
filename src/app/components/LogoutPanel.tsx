'use client';

import { signOut } from 'next-auth/react';
import { Button } from './Button';

interface LogoutPanelProps {
	userName: string | null;
}

export const LogoutPanel: React.FC<LogoutPanelProps> = ({ userName }) => {
	return (
		<div className='w-full flex flex-col gap-2'>
			<div>{userName}</div>
			<Button
				label='Logout'
				onClick={() => signOut()}
			/>
		</div>
	);
};
