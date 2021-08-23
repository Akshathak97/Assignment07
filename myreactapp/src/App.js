import image from './aboutme.jpg';

function App() {
  return (
   <div>
     {/* nav bar */}
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <div className="container-fluid">
         <a className="navbar-brand" href="#">About Me</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggle-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarColor01">
         <ul className="navbar-nav me-auto">
         <li className="nav-item">
         <a className="nav-link active" href="#">Home
         <span className="visually-hidden">(current)</span>
         </a>
         </li>

         <li className="nav-item">
                <a className="nav-link" href="#career">Career</a>
         </li>

         <li className="nav-item">
           <a className="nav-link" href="#hobbies">Hobbies</a>
         </li>
              
         <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
         </li>

         </ul>

         </div>

       </div>

     </nav>

     {/* Intro */}

     <div className="card mb-3">
        <h3 className="card-header">Akshatha Kumar</h3>
        <div className="card-body">
          <h5 className="card-title">Introduction</h5>
          
        </div>
       
         <center>

           <img src={image} width="500px"></img>
         </center> 
       
        <div className="card-body">
          <p className="card-text">My name is Akshatha Kumar. I am 24 years old and I am from Canton, Michigan. Growing up, I was always had interest in computers and technology, which led me to studying a bit about it. I have about 4+ years of experince as an software developer.</p>
        </div>
        
      </div>

    {/* Hobbies */}

    <div className="card">
        <div className="card-body">
          <div id="hobbies">

            <h4 className="card-title">Hobbies</h4>
          </div>
          <p className="card-text">I like to workout, go on hikes, travel, read, watch tv, and hangout with friends. I also like to ride my motorcycle every few days when the weather is nice outside.</p>
        </div>
      </div>
    
<br></br>
    {/* Career */}

    <div className="card">
      <div className="card-body">
        <div id="career">

          <h4 className="card-title">Career</h4>
        </div>
        <h6 className="card-subtitle mb-2 text-muted">Professional Experience</h6>
        <p className="card-text">
     
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Position</th>
                <th scope="col">Company</th>
                
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <th scope="row">June 2020-present</th>
                <td>Sr. Frontend Developer/Angular Developer</td>
                <td>Huntington Bank, Columbus, OH</td>
              </tr>
              
              <tr className="table-active">
                <th scope="row">Jan 2019-June 2020</th>
                <td>Sr. Frontend Developer/Angular Developer</td>
                <td>Caterpillar Financials, Nashville, TN	</td>
              </tr>

              <tr className="table-active">
                <th scope="row">March 2017-Jan 2019</th>
                <td>UI Developer/React Developer</td>
                <td>I-Team Inc, Dallas, TX</td>
              </tr>

              <tr className="table-active">
                <th scope="row"> Jan 2016-March 2017</th>
                <td>UI Developer/React Developer</td>
                <td>Birla Soft, Edison, NJ</td>
              </tr>
              </tbody>
              </table>

        </p>
   
      </div>
    </div>





   </div>
   
  );
}


export default App;
