import './Table.css';

// Example of a data array that
// you might receive from an API
const data = [
{ date: '23-03-2022', nameOrg: "Warande" , name: "Anna", function: "Verzorgende IG"},
{ date: '21-04-2022', nameOrg: "Zorgcirkel" ,name: "Johan", function: "Verpleegkundige"},
{ date: '21-05-2022', nameOrg: "Cordaan" ,name: "Kees", function: "Helpende Plus"},
]

function Table() {
return (
	<div className="Table">
	<table>
		<tr>
		<th>Caregiver</th>
   		<th>Function</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
		<td>{val.jobTitleName}</td>
        <td>{val.preferredFullName}</td>
        <td>{'14:00-16:00'}</td>
		</tr>
		)
		})}
	</table>
	</div>
);
}


export default Table