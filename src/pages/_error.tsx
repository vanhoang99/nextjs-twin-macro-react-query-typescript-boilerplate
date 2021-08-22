const Error = ({ statusCode }: { statusCode?: number }) => (
	<p>
		{statusCode
			? `An error ${statusCode} occurred on server`
			: 'An error occurred on client'}
	</p>
);
Error.getInitialProps = ({
	res,
	err,
}: {
	res: any;
	err: any;
}): { statusCode: number } => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
