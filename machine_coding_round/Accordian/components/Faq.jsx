import Accordian from './Accordian'
import data from '../src/data.json'
function Faq() {
console.log(data.faqs);
  return (
    <div>
      <h1>FAQ</h1>
      {data.faqs.map((object,index)=>{
        return (
        <>
             <Accordian key={index} qna={object}></Accordian>

        </>
            )
      })}
    
    </div>
  )
}

export default Faq
