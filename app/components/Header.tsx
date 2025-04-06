import { Link } from '@tanstack/react-router'

export default function Header() {
	return (
		<div className='px-4 py-2 mb-4 flex items-center gap-4 bg-slate-800 text-white'>
			<p className='font-bold'>
				<Link to='/'>Home</Link>
			</p>
		</div>
	)
}
