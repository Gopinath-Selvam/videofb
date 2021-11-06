import { useEffect, useState } from 'react';
import './App.css';



function App() {  
  
  const [AverageRating , setAverageRating] = useState(0);
  const [error, setError] = useState("");
  const [entries, setEntries] = useState(0);
 
  useEffect(() => {
    setError("")
  }, [])

  const validateForm = (event) => {
    event.preventDefault();
    
    const st1 = document.getElementById("star-1").checked;
    const st2 = document.getElementById("star-2").checked;
    const st3 = document.getElementById("star-3").checked;
    const st4 = document.getElementById("star-4").checked;
    const st5 = document.getElementById("star-5").checked;
    
    if (entries === 0) {
     if(st5==true)
         {
          const s5 = document.getElementById("star-5").value;
          setAverageRating((parseFloat(((((AverageRating/ 100 * 5) * entries)) + parseInt(st5)) / (entries + 1)) / 5) * 100)
         }
 else
 if(st4==true)
 {
  const s4 = document.getElementById("star-4").value;
  setAverageRating((parseFloat(((((AverageRating/ 100 * 5) * entries)) + parseInt(st5)) / (entries + 1)) / 5) * 100)
 }        
        }
        else
        if(st3==true)
        {
         const s3 = document.getElementById("star-3").value;
         setAverageRating((parseFloat(((((AverageRating/ 100 * 5) * entries)) + parseInt(st5)) / (entries + 1)) / 5) * 100)


        }
        else
        if(st2==true)
        {
          const s2 = document.getElementById("star-2").value;
          setAverageRating((parseFloat(((((AverageRating/ 100 * 5) * entries)) + parseInt(st5)) / (entries + 1)) / 5) * 100)

        }
else
if(st1==true)
{
  const s1 = document.getElementById("star-1").value;
  setAverageRating((parseFloat(((((AverageRating/ 100 * 5) * entries)) + parseInt(st5)) / (entries + 1)) / 5) * 100) 
}
setEntries(entries + 1)
    console.log(AverageRating)


    if(
    feedback == ""
     )
      alert("Fill in the details");
    else {
      setError("");
      document.getElementById("Feedback").value="";
    document.getElementById("star-1").checked=false;
    document.getElementById("star-2").checked=false;
    document.getElementById("star-3").checked=false;
    document.getElementById("star-4").checked=false;
    document.getElementById("star-5").checked=false;
     
    alert("Form Validated Successfully!");
    }
  }
    return (
      <div className="App">
        <div class="App-header">
          
        </div>
       
        <form className="main" onSubmit={validateForm}> 
           <br />  <br />  <br />  <br />  <br />  <br />
          <div class="rating">
            <label for="rating" class="form-label">Rating</label>
            <div class="container d-flex justify-content-center mt-200">
              <div class="row">
                <div class="col-md-12">
                  <div class="stars">
                    <form action=""> <input class="star star-5" id="star-5" type="radio" value="5" name="star" /> <label class="star star-5" for="star-5"></label> <input class="star star-4" id="star-4" type="radio" value="4" name="star" /> <label class="star star-4" for="star-4"></label> <input class="star star-3" id="star-3" type="radio" value="3" name="star" /> <label class="star star-3" for="star-3"></label> <input class="star star-2" id="star-2" type="radio" value="2" name="star" /> <label class="star star-2" for="star-2"></label> <input class="star star-1" id="star-1" type="radio" value="1" name="star" /> <label class="star star-1" for="star-1"></label> </form>
                    <div class="progress">
              <div class="progress-bar" style={{ width: AverageRating.toString() + "%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Average Response</div>
            </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="Feedback" class="form-label">Feedback   </label>
            <textarea class="form-control" id="Feedback" rows="3"></textarea>
          </div>
        

          <button type="submit" class="btn btn-primary">Submit</button>

        </form>
      </div>
    );
  }

  export default App;
