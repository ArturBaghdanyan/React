import './App.css';
import ReactDOM from 'react-dom/client';
import Header from "./Header/Header";
import Section from "./Section/Section";
import Aside from "./Aside/Aside";


function App() {

    return (
     <div className="App">

             <Header />
            <Section />
            <Aside />


         <article className="article">

             <div className="img">
                 <img src="icon/John smith.jpg" alt="logo"/>
             </div>
             <div>
                 <p>John Smith, CEO</p><br />

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Magni quos rerum repellendus, perferendis tenetur minus</p>
                 <p>consequatur similique voluptates nemo asperiores
                     incidunt dicta. Odio eaque ex molestiae explicabo
                     optio quisquam</p>
                 <p>illum unde adipisci laborum</p>

             </div>

         </article>

         <div className="caption">
             <h2>Pricing Plans</h2><br />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Magni quos rerum repellendus, perferendis
                 tenetur minus</p>
             <p>color magna aliqua</p>
         </div>

         <menu className="menu">
             <div className="parent">
                 <div className="month">
                     <div>
                         <i>$</i>
                         <strong>75</strong>
                         <i>/month</i>
                     </div>
                 </div>

                 <div className="child1">
                     <h2>Basic</h2>
                     <p>Description goes here</p>
                 </div>
                 <div className="child2">
                     <p>Feature 1</p>
                     <p>Feature 2</p>
                     <p>Feature 3</p>
                     <p>Feature 4</p>
                     <span>PURCHASE</span>
                 </div>
             </div>
             <div className="parent">
                 <div className="month">
                     <div>
                         <i>$</i>
                         <strong>75</strong>
                         <i>/month</i>
                     </div>
                 </div>

                 <div className="child1">
                     <h2>Standard</h2>
                     <p>Description goes here</p>
                 </div>
                 <div className="child2">
                     <p>Feature 1</p>
                     <p>Feature 2</p>
                     <p>Feature 3</p>
                     <p>Feature 4</p>
                     <span>PURCHASE</span>
                 </div>
             </div>

             <div className="parent">
                 <div className="month green-background">
                     <div>
                         <i>$</i>
                         <strong>75</strong>
                         <i>/month</i>
                     </div>
                 </div>

                 <div className="child1 green-background">
                     <h2>Deluxe</h2>
                     <p>Description goes here</p>
                 </div>
                 <div className="child2">
                     <p>Feature 1</p>
                     <p>Feature 2</p>
                     <p>Feature 3</p>
                     <p>Feature 4</p>
                     <span className="background">PURCHASE</span>
                 </div>
             </div>
             <div className="parent">
                 <div className="month">
                     <div>
                         <i>$</i>
                         <strong>75</strong>
                         <i>/month</i>
                     </div>
                 </div>

                 <div className="child1">
                     <h2>Premium</h2>
                     <p>Description goes here</p>
                 </div>
                 <div className="child2">
                     <p>Feature 1</p>
                     <p>Feature 2</p>
                     <p>Feature 3</p>
                     <p>Feature 4</p>
                     <span>PURCHASE</span>
                 </div>
             </div>
         </menu>

         <div className="input">
             <h2>Contact Us</h2>
             <p>Lorem ipsum dolar sit amet,consectetur adipisicing elit</p>
             <form>
                 <input type="text" placeholder="Name" />
                     <input type="email" placeholder="Email" />
                         <span><input type="text" placeholder="Message..." /></span>
             </form>
             <p><b>SEND</b></p>
         </div>

         <footer className="footer">

             <div>
                 <h3>elsta</h3>
                 <p>All Rights Reserved @ 2022</p>
             </div>
             <div>
                 <img src="icon/facebook.png" alt="logo"/>
                     <img src="icon/twitter.png" alt="logo"/>
                         <img src="icon/g+.png" alt="logo"/>
             </div>
         </footer>
     </div>
     )

}


export default App;
