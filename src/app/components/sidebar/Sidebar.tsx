import { DesktopSidebar } from './DesktopSidebar';
import { MobileFooter } from './MobileFooter';

export const Sidebar = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full'>
			<DesktopSidebar />
			<MobileFooter />
			<main className='lg:pl-20 h-full'>{children}</main>
		</div>
	);
};
