import { Toaster } from 'react-hot-toast';
import './globals.css';
import { Inter } from 'next/font/google';
import { ToasterContext } from './context/ToasterContext';
import { AuthContext } from './context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Messenger Clone',
	description: 'Clone of the Meta Messenger App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthContext>
					{children}
					<ToasterContext />
				</AuthContext>
			</body>
		</html>
	);
}
