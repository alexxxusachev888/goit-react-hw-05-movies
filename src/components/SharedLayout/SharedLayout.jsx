import { Outlet, NavLink} from "react-router-dom";
import { Suspense } from "react";

const SharedLayout = ()=> {

    return(
        <>
        <div>
            <header>
                <div>
                    <NavLink to='/'>React Filmoteka</NavLink>
                </div>
                
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='movies'>Movies</NavLink>
            </nav>
            </header>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>

            <footer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quo?</p>
            </footer>
        </div>
        </>
    )

}

export default SharedLayout;