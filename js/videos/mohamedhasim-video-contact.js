// api url
const api_url =
	"https://bookstoremagapi.herokuapp.com/videos/get";

 
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data1 = await response.json();
   // console.log(data1.data[0].videos);
//	let data = data1.data[0].videos;
	let data = data1.data[0].videos;
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);


// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		
		</tr>`;
	
		console.log(data);
	// Loop to access all rows
	for (let r of data) {
		if(r.name == "contact"){
	//	tab += r.name+'<br>'+r.location;
//     tab +=`<tr>
// 	<td>${r.name} </td>
// 	<td>${r.location}</td>	
// </tr>`

    tab += `
    <iframe src="${r.location}"
 frameborder="0" allow="accelerometer; autoplay; clipboard-write;
  encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
    `


 

		}
	}

    

	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
