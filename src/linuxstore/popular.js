
// import './App.css';

function Popular() {
  const data =['a','b','c','d','e']
return (
<div className="pop">
 <section className='Popular'>
   <h2>Popular</h2>
   <div className="popcontent">{
     data.map(item => {
       return <div>
       <img src=''/>
       <div className="popName">{item}</div>
     </div>
     })
   }
   </div>
 </section>
 </div>
)
}

export default Popular;