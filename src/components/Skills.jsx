import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Sass from '../assets/sass.png';
import Tailwind from '../assets/tailwind.png';
import Git from '../assets/git.png';
import Nextjs from '../assets/nextjs.webp';
import Typescript from '../assets/typescript.svg';
import Rest from '../assets/rest.png';
import Material from '../assets/mui.png';
import Redux from '../assets/redux.svg';

const Skills = () => {
	return (
		<div name='skills' className='w-full h-screen text-gray-300 '>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='inline text-4xl font-bold border-b-4 border-pink-600'>
						Skills
					</p>
					<p className='py-4'>
						\\ These are the technologies I've worked with
					</p>
				</div>

				<div className='grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4'>
					<div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={HTML}
							alt='HTML icon'
						/>
						<p className='my-4'>HTML</p>
					</div>
					<div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Git}
							alt='Git icon'
						/>
						<p className='my-4'>GIT</p>
					</div>
					<div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Javascript}
							alt='Javascript icon'
						/>
						<p className='my-4'>JAVASCRIPT</p>
					</div>
					<div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Typescript}
							alt='Typescript icon'
						/>
						<p className='my-4'>TYPESCRIPT</p>
					</div>
					<div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={CSS}
							alt='CSS icon'
						/>
						<p className='my-4'>CSS</p>
					</div>
					<div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Sass}
							alt='Sass icon'
						/>
						<p className='my-4'>SASS</p>
					</div>
					<div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={ReactImg}
							alt='React icon'
						/>
						<p className='my-4'>REACT</p>
					</div>
                    <div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Redux}
							alt='Redux icon'
						/>
						<p className='my-4'>REDUX TOOLKIT</p>
					</div>
					<div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Tailwind}
							alt='Tailwind icon'
						/>
						<p className='my-4'>TAILWIND</p>
					</div>
                    <div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Material}
							alt='Material UI icon'
						/>
						<p className='my-4'>MATERIAL UI</p>
					</div>
                    <div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Rest}
							alt='Rest api icon'
						/>
						<p className='my-4'>REST API</p>
					</div>
                    <div className='pt-4 shadow shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Nextjs}
							alt='Next.js icon'
						/>
						<p className='my-4'>NEXT.JS</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
