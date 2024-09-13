const ListItem = ({ children }: { children: React.ReactNode }) => {
	return (
		<li className="hover:text-black transition duration-300 ease-in-out">
			{children}
		</li>
	);
};

export default ListItem;
