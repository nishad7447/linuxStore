
// import './App.css';

function RecentAdd() {
  const data=['a','b','c','d','e']
return (
<div className="recently">
 <section className='Popular'>
   <h2>Recently</h2>
   <div className="popcontent">
{
      data .map(item => 
    {
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

export default RecentAdd;
