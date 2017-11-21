document.querySelector("[method='GET']").addEventListener('submit',(e) => {
	e.preventDefault();
	fetch('http://127.0.0.1:1337/words',{ credentials:'include', method:'GET'}).then( (response) => {
		return response.json();
	}).then( (data) => {
		document.querySelector('pre').innerHTML = JSON.stringify(data);
	});
});

document.querySelector("[method='POST']").addEventListener('submit',(e) => {
	e.preventDefault();
	var formData = new FormData(e.target);

	fetch('http://127.0.0.1:1337/words',{ credentials:'include', method:'POST', body:formData }).then( (response) => {
		return response.json();
	}).then( (data) => {
		document.querySelector('pre').innerHTML = JSON.stringify(data);
	});
});

document.querySelector("[method='PUT']").addEventListener('submit',(e) => {
	e.preventDefault();
	var formData = new FormData(e.target);

	fetch('http://127.0.0.1:1337/words',{ credentials:'include', method:'PUT' , body:formData}).then( (response) => {
		return response.json();
	}).then( (data) => {
		document.querySelector('pre').innerHTML = JSON.stringify(data);
	});
});

document.querySelector("[method='DELETE']").addEventListener('submit',(e) => {
	e.preventDefault();
	var formData 	= new FormData(e.target);
	var queryString = "?";
	for (var element of formData.entries()){
		queryString += element[0]+"="+element[1]+"&";
	}
	queryString = queryString.slice(0,-1);

	fetch('http://127.0.0.1:1337/words' + queryString,{ credentials:'include', method:'DELETE'}).then( (response) => {
		return response.json();
	}).then( (data) => {
		document.querySelector('pre').innerHTML = JSON.stringify(data);
	});
});






