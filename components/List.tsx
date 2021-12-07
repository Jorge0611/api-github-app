import {motion} from "framer-motion"
interface Props {
	id: string
	name: string,
	fullName: string,
	description: string,
	language: string,
	htmlUrl: string,
	onClick?: () => void;
}

const List = ({id, name, fullName, description, language, htmlUrl, ...props}:Props) => {
	return(
		<div>
			<motion.div 
				className="flex flex-col bg-cool-gray-700 rounded-md md shadow-2xl px-6 py-3"
				layoutId={`card-container-${id}`}
				{...props}
			>
				{/*Name & Full name*/}
				<div className="flex flex-row justify-between items-center cursor-pointer">
					<motion.div 
						className="tracking-wider"
						layoutId={`card-name-${id}`}
					>
						<h3 className="text-xl">
							{name}
						</h3>
						<p className="text-sm">
							{fullName}
						</p>
					</motion.div>
					<div> 
						<a href={htmlUrl} target="_blank" rel="noreferrer"
						   className="text-md text-blue-500 hover:underline cursor-pointer">
							Visit
						</a>
					</div>
				</div>

				{/*Tags*/}
				<motion.div 
					className="text-xs flex flex-row space-x-2 mt-4 content-end"
					layoutId={`card-tags-${id}`}
				>
					<div className="rounded-md py-0.5 px-2 bg-purple-600">
						<span >
							{language ? language : "N/A"}
						</span>	
					</div>
				</motion.div>
				
				{/*Description*/}
				<motion.div 
					className="mt-4 max-h-36 overflow-y-auto bg-cool-gray-600 p-2 rounded-md cursor-pointer"
					layoutId={`card-description-${id}`}
				>
					<p className="text-sm">
						{description}
					</p>
				</motion.div>

			</motion.div>
		</div>
	)
}


export default List;
