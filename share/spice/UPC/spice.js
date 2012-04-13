function nrupc(data){
  if (data.hits.length){
    hit = data.hits[0];
    content = ''
    if (data.hits[0].lowestnewprice){
      content += '<b>Price New: </b>$'+data.hits[0].lowestnewprice+'</br>';
    }
    if (hit.lowestusedprice){
      content += '<b>Price Used: </b>$'+hit.lowestusedprice+'</br>';
    }
    if (hit.lowestrefurbprice){
      content += '<b>Price Refurbished: </b>$'+hit.lowestrefurbprice+'</br>';
    }

    
    
    items = [[]];
    items[0]['a'] = content;
    items[0]['h'] = data.hits[0].title;
    items[0]['s'] = 'Shopobot';
    items[0]['u'] = data.hits[0].url;
    items[0]['i'] = data.hits[0].image400;
    
    nra(items);
  }
}