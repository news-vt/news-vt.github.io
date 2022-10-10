import type { NextPage } from 'next'
import Home from '../components/home.mdx';

const HomePage: NextPage = () => {
    return (
        <div className="container-sm p-5">
            <Home />
        </div>
    )
}

export default HomePage
