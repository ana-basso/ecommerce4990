import classes from './Navbar.module.css'

const Navbar = ()=> {
    return(
        <nav className={classes.container}> 
            <h1 className={classes.marron}> Eccomerce</h1> 
            <section className={classes.categories}> 
                <button>Celulares</button> 
                <button>Tablets</button> 
                <button>Notebook</button> 
            </section> 
        </nav>
    )
}

export default Navbar 