'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import { Avatar } from '../Avatar';
import { useCallback, useState } from 'react';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';

interface UserMenuProps {
	currentUser?: User | null;
}

export const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div className='p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
					<AiOutlineMenu />
					<Avatar src={currentUser?.image} />
				</div>
			</div>
		</div>
	);
};
