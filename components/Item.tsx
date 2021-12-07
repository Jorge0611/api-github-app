import {motion} from "framer-motion";
import Image from "next/image";

interface Props {
	id: string;
	repos: any[],
	onClick?: () => void;
}

const Item = ({id, repos, ...props}:Props) => {
	const {name, full_name, owner, language, description, html_url} = repos.find((repo) => repo.id === id)!;

	return(
		<>
			{/*Card*/}
			<motion.div 
				className="fixed top-0 left-0 right-0 w-full h-full backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-80"
				initial={{ opacity: 0 }}
		        animate={{ opacity: 1 }}
		        exit={{ opacity: 0, transition: { duration: 0.15 } }}
		        transition={{ duration: 0.2, delay: 0.15 }}
		        style={{ pointerEvents: "auto" }}
			>	
				
				<div className="fixed top-0 left-0 right-0 m-6 mt-24 md:mt-12 md:m-24">
					
					<motion.div className="fixed top-0 right-0 mr-6 mt-12 md:mt-6" animate>
						<button
							{...props}
							className="flex bg-blue-gray-100 shadow hover:shadow-2xl items-center justify-center text-blue-gray-600 h-7 w-7 rounded-full relative"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
			                <path
			                  fillRule="evenodd"
			                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
			                  clipRule="evenodd"
			                />
			              </svg>
		              	</button>
					</motion.div>

					<motion.div 
						className="flex flex-col space-y-6" 
						layoutId={`card-container-${id}`}
					>

						<div className="flex flex-row items-center justify-between">
							
							<motion.div 
								className="tracking-widest truncate mr-3"
								layoutId={`card-name-${id}`}
							>
								<h3 className="text-xl md:text-4xl uppercase">
									{name}
								</h3>
								<p className="text-md">
									{full_name}
								</p>
							</motion.div>
							
							<motion.div className="flex flex-row items-center space-x-4" animate>
								<a href={owner.html_url} target="_blank" rel="noreferrer"
								   className="text-lg md:text-2xl text-white hover:underline cursor-pointer">
									{owner.login}
								</a>
								<div className="relative h-16 w-16">
									<Image src={owner.avatar_url} alt={owner.login} layout="fill"/>
								</div>
							</motion.div>
						</div>

						<motion.div
							layoutId={`card-tags-${id}`}
							className="flex flex-row items-center"
						>
							<div className={"rounded-md py-0.5 px-2 bg-purple-600"}>
								<span >
									{language ? language : "N/A"}
								</span>	
							</div>
						</motion.div>

						<motion.div
							layoutId={`card-description-${id}`}
							className="text-md	"
						>
							<p>
								{description}
							</p>
						</motion.div>

						<motion.div animate>
							<a href={html_url} target="_blank" rel="noreferrer"
							   className="px-4 py-3 rounded-md text-lg cursor-pointer transition duration-400 ease-in-out bg-blue-600 hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110">
								Visit repository
							</a>
						</motion.div>

					</motion.div>
				</div>
				</motion.div>
		</>
	)
}


export default Item;
