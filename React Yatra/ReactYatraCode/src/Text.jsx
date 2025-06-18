import { useEffect } from "react";

const Text = (props) => {
  const {children, externalData} = props;
  useEffect(()=>{
    console.log("External Data changed", externalData)
  },[externalData])
  
return <p>{children}</p>    
}

export default Text;