import "../Table.css";

function Table({tableData}) {
    console.log("dataprint",tableData);
    console.log(7);
    return(

        <table className="output">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone no</th>
                    <th>Gender</th>
                    <th>Education</th>

                </tr>
            </thead>
            <tbody>
            
    {     
            tableData.map((Data)=>{
                console.log(Data,"data");
                return(
            <tr>
             
              <td>{Data.name}</td>
              <td>{Data.email}</td>
              <td>{Data.address}</td>
              <td>{Data.phoneno}</td>
              <td>{Data.gender}</td>
              <td>{Data.education}</td>
            </tr>
                );
            })
                 
    }
            </tbody>
        </table>
    )
}


export default Table;