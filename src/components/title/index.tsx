const Title = ({ children }: { children: React.ReactNode }) => {
	return (
		<h2 className="text-6xl font-bold text-orange-500 uppercase">{children}</h2>
	);
};

export default Title;
