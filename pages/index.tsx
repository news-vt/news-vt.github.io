import type { NextPage } from 'next'
import Home from '../components/home.mdx';

const HomePage: NextPage = () => {

    const onClick = () => {
        alert("This is an alert");
    }

    return (
        <div>
            <Home />
            <button className="btn btn-success" onClick={ onClick }>Test Alert</button>
        </div>
    )
}

export default HomePage
