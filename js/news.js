const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
   if (xhr.readyState == 4) {
      if (xhr.status == 200) {

         let parser = new DOMParser();
         let xml = parser.parseFromString(xhr.responseText, 'application/xml')
         console.log(xml);
      } 

      if (xhr.status == 404) {
         console.log('File or resource not found')
      }
   }
};

xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.lianatech.com/resources/blog.rss', true);
xhr.send();