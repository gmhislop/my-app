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
		<th>Date</th>
		<th>Organisation</th>
		<th>Caregiver</th>
    <th>Functie</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.date}</td>
			<td>{val.nameOrg}</td>
			<td>{val.name}</td>
      <td>{val.function}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}


export default Table