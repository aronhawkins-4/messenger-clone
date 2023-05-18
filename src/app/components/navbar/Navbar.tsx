import { User } from '@prisma/client';
import { Container } from '../Container';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';

interface NavbarProps {
	currentUser?: User | null;
}
export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
	return (
		<div className='fixed w-full bg-white z-10 shadow-sm'>
			<div className='py-4 border-b'>
				<Container>
					<div className='flex flex-row items-center justify-between gap-4 md:gap-0'>
						<Logo />
						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
		</div>
	);
};
