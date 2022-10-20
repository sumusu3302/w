var data = [
    
        {
          "version": "1.0.0",
          "date": "Tuesday, October 18, 2022",
          "changes": [
            {"type": "New", "desc": "description"}
          ]
        }
    ]
    const changesdiv = (change) => {
      const main = document.createElement("div");
      main.classList.add('flex', 'flex-col', 'gap-y-2', 'p-6', 'rounded-xl', 'max-w-5xl', 'w-full');
      main.setAttribute('style', 'background-color: var(--bg);')
      const div1 = document.createElement("div");
      const version = document.createElement('h1');
      version.classList.add('font-bold', 'text-2xl')
      version.innerHTML = change.version
      const datediv = document.createElement('div');
      datediv.classList.add('flex', 'flex-col');
      const datetxt = document.createElement('h2');
      datetxt.classList.add('font-semibold', 'text-lg');
      datetxt.innerHTML = change.date
      const div2 = document.createElement("div");
      div2.classList.add('flex', 'flex-col', 'gap-y-6');


      main.appendChild(div1) 
      div1.appendChild(version)
      div1.appendChild(datediv)
      datediv.appendChild(datetxt)
      main.appendChild(div2)         
        console.log(change.version, change.date)
        for (let i = 0; i < change.changes.length; i++) {
            let changes =  changestext(change.changes[i]);
            div2.appendChild(changes)
        }
        return main
    }
    const changestext = (text) => {
        const allchanges = document.createElement("div");
        allchanges.classList.add('flex', 'flex-row', 'gap-x-2', '2xl:gap-x-3', 'items-center');
      const type = document.createElement("div");
      type.classList.add('px-2', 'py-1', 'rounded-xl', 'tracking-tighter', 'font-medium', 'text-xs', 'md:text-sm', '2xl:text-base')
      if (text.type == 'New') {
        type.setAttribute('style', 'background-color: #124bc7;')
      }
      type.innerHTML = text.type
      const desc = document.createElement("p");
      desc.classList.add('text-sm', 'md:text-base', '2xl:text-lg', 'tracking-tighter', 'font-semibold')
      desc.innerText = text.desc
      allchanges.appendChild(type)  
      allchanges.appendChild(desc)    
      return allchanges
    }
    const topdiv = document.getElementById('changelog')
    for (let i = 0; i < data.length; i++) {
       let main =  changesdiv(data[i]);
       topdiv.appendChild(main);

  }
 // $.each(data, function(i, field){
   // console.log(data.date[i]);
  //  console.log(data.version[i]);
   // $.each(data.changes[i], function (change) { 
   //      console.log(change.type[i])
  //       console.log(change.desc[i])
  //  });
  //  const main = document.createElement('div');
   // $('changelog').appendTo(main);