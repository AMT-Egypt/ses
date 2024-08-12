
const ListTitleProduct = ({display,setDisplay}:{display:string,setDisplay:any}) => {
    return (
        <div>
            <ul className="ulList">
                <li onClick={()=>setDisplay("1")} style={{backgroundColor:`${display==="1" ? "#578DF5" : "rgba(255, 255, 255, 0.25)"}`}} 
                className="liText">
                    Microsoft Power BI
                </li>
                <li onClick={()=>setDisplay("2")} style={{backgroundColor:`${display==="2" ? "#578DF5" : "rgba(255, 255, 255, 0.25)"}`}} 
                className="liText">
                    Microsoft Dynamics Finance and Operations
                </li>
                <li onClick={()=>setDisplay("3")} style={{backgroundColor:`${display==="3" ? "#578DF5" : "rgba(255, 255, 255, 0.25)"}`}} 
                className="liText">
                    Microsoft Dynamics Business Central
                </li>
                <li onClick={()=>setDisplay("4")} style={{backgroundColor:`${display==="4" ? "#578DF5" : "rgba(255, 255, 255, 0.25)"}`}} 
                className="liText">
                    V-Connect
                </li>
            </ul>
        </div>
    );
}

export default ListTitleProduct;
