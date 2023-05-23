'use client';

import { FullConversationType } from '@/app/types';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Conversation, Message, User } from '@prisma/client';
import { format } from 'date-fns';
import clsx from 'clsx';
import useOtherUser from '@/app/hooks/useOtherUser';
import { Router } from 'next/router';
import { useSession } from 'next-auth/react';
import { Avatar } from '@/app/components/Avatar';
import { AvatarGroup } from '@/app/components/AvatarGroup';

interface ConversationBoxProps {
	data: FullConversationType;
	selected?: boolean;
}

export const ConversationBox: React.FC<ConversationBoxProps> = ({ data, selected }) => {
	const router = useRouter();
	const otherUser = useOtherUser(data);
	const session = useSession();

	const handleClick = useCallback(() => {
		router.push(`/conversations/${data.id}`);
	}, [router, data.id]);

	const lastMessage = useMemo(() => {
		const messages = data.messages || [];

		return messages[messages.length - 1];
	}, [data.messages]);

	const userEmail = useMemo(() => {
		return session?.data?.user?.email;
	}, [session?.data?.user?.email]);

	const hasSeen = useMemo(() => {
		if (!lastMessage) {
			return false;
		}

		const seenArray = lastMessage.seen || [];

		if (!userEmail) {
			return false;
		}

		return seenArray.filter((user) => user.email === userEmail).length !== 0;
	}, [userEmail, lastMessage]);

	const lastMessageText = useMemo(() => {
		if (lastMessage?.image) {
			return 'Sent an image';
		}

		if (lastMessage?.body) {
			return lastMessage.body;
		}
		return 'Started a conversation';
	}, [lastMessage]);

	return (
		<div
			onClick={handleClick}
			className={clsx(
				`
        w-full
        relative
        flex
        items-center
        space-x-3
        hover:bg-neutral-100
        rounded-lg
        transition
        cursor-pointer
        p-3
        `,
				selected ? 'bg-neutral-100' : 'bg-white'
			)}
		>
			{data.isGroup ? <AvatarGroup users={data.users} /> : <Avatar user={otherUser} />}
			<div className='min-w-0 flex-1'>
				<div className='focus:outline-non'>
					<div className='flex justify-between items-center mb-1'>
						<p className='text-sm font-medium text-gray-900'>{data.name || otherUser.name}</p>
						{lastMessage?.createdAt && <p className='text-xs text-gray-400 font-light'>{format(new Date(lastMessage.createdAt), 'p')}</p>}
					</div>
					<p className={clsx(`first-letter:truncate text-xs`, hasSeen ? 'text-gray-500' : 'text-black font-medium')}>{lastMessageText}</p>
				</div>
			</div>
		</div>
	);
};
