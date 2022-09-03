const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
       if (xhr.status == 200) {
        console.log(xhr.responseText);
       } 

       if (xhr.status == 404) {
        console.log('File or resource not found')
       }
    }
};

xhr.open('get', '', true);
xhr.send();