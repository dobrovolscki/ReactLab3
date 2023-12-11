import React from 'react';

const Skeleton = () => {
	return (
		<div className="w-full p-4 space-y-4 divide-y divide-gray-200 rounded shadow animate-pulse">
			<div className="flex items-center justify-between">
				<div>
					<div className="h-2 bg-purple-300 rounded-full w-20 mb-2"></div>
					<div className="w-28 h-1.5 bg-purple-200 rounded-full"></div>
				</div>
				<div className="h-2 bg-purple-300 rounded-full w-10"></div>
			</div>
			<div className="flex items-center justify-between pt-3">
				<div>
					<div className="h-2 bg-purple-300 rounded-full w-22 mb-2"></div>
					<div className="w-30 h-1.5 bg-purple-200 rounded-full"></div>
				</div>
				<div className="h-2 bg-purple-300 rounded-full w-10"></div>
			</div>
			<div className="flex items-center justify-between pt-3">
				<div>
					<div className="h-2 bg-purple-300 rounded-full w-26 mb-2"></div>
					<div className="w-28 h-1.5 bg-purple-200 rounded-full"></div>
				</div>
				<div className="h-2 bg-purple-300 rounded-full w-10"></div>
			</div>
			<div className="flex items-center justify-between pt-3">
				<div>
					<div className="h-2 bg-purple-300 rounded-full w-20 mb-2"></div>
					<div className="w-32 h-1.5 bg-purple-200 rounded-full"></div>
				</div>
				<div className="h-2 bg-purple-300 rounded-full w-10"></div>
			</div>
			<div className="flex items-center justify-between pt-3">
				<div>
					<div className="h-2 bg-purple-300 rounded-full w-24 mb-2"></div>
					<div className="w-32 h-1.5 bg-purple-200 rounded-full"></div>
				</div>
				<div className="h-2 bg-purple-300 rounded-full w-10"></div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default Skeleton;