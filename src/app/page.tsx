import getCurrentUser from './actions/getCurrentUser';
import { LoginPanel } from './components/LoginPanel';
import { LogoutPanel } from './components/LogoutPanel';
import { Container } from './components/Container';

export default async function Home() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return (
			<Container
				justify='center'
				align='center'
			>
				<div className='flex flex-col gap-2 p-8 justify-center items-center'>
					<LoginPanel />
				</div>
			</Container>
		);
	}
	return (
		<Container
			justify='center'
			align='center'
		>
			<LogoutPanel userName={currentUser.name} />
		</Container>
	);
}
