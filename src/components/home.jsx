import './nav.css'


const Home =() =>{
    return[
       <>
           <nav>
                 <div className='left'></div>
                <div class="right">
                    <ul>
                        <li className="active"><a href="">Home</a></li>
                        <li><a href="">About <i class="fa fa-angle-down"></i></a></li>
                        <li><a href="">Resources <i class="fa fa-angle-down"></i></a></li>
                        <li><a href="">Trad. Councils <i class="fa fa-angle-down"></i></a></li>
                        <li><a href="">Market days</a></li>
                        <li><a href="">LGA's <i class="fa fa-angle-down"></i></a></li>
                        <li><a href="">Market days</a></li>
                        <li><a href="">Icons <i class="fa fa-angle-down"></i></a></li>
                        <li><a href="">Media <i class="fa fa-angle-down"></i></a></li>
                    </ul>
                </div>
                <div class="end">
                     <i class="fa fa-search"></i>
            
                </div>
            </nav>
       </>
    ]
}
export default Home