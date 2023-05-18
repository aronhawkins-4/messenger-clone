interface ContainerProps {
	children: React.ReactNode;
	justify?: string;
	align?: string;
}

export const Container: React.FC<ContainerProps> = ({
	children,
	justify = 'start',
	align = 'start',
}) => {
	return (
		<div className='h-full max-w-screen-xl mx-auto xl:px-20 xl:py-20 md:px-10 md:py-10 sm:px-2 sm:py-4 py-4 px-4 flex flex-col justify-center'>
			{children}
		</div>
	);
};
