function countSmileys(arr) {
    let count = 0

    let faces = [':)' , ';)' , ':D' , ';D', 
                 ':-)', ':-D', ';-D', ';-)',
                 ':~)' ,' ;~)', ':~D', ';~D' ]
    

    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j < faces.length; j++ ){
            if( arr[i] === faces[j]){
                count++
            }
        }
    }
      
      return count
      
    }


    