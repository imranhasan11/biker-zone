 //Module 17
    // var: we should not use  
    // let: value can change
    // const: value will not change
 //Module 18

 //Module 19
      // variable 
   //const amount=200;

      // condition 
   //if(amount>100) {

   //}
   //else {

   //}
     // array 
   const numbers= [12,34,15.25];
    console.log(numbers)

    //about loop
   const rolls=[4,7,8,9,35]
    for( const roll of rolls){
      console.log(roll)
   }
    // while loop
   let number=0;
   while(number<10){
      console.log('tik ache',number)
      number += 1
   }
   while(number<10){
      console.log('tik ache',number)
      number -= 1
   }
   let num =1;
   let sum =0;
   while(num<10){
      console.log(num);
      num++
   }
     
   //for loop

   for (let num =0; num<5; num++){
      console.log(num)
   }

   for (let num =0; num<25; num=num+2){
      console.log(num)
      if(num>10){
         break;
      }
   }

   for (let num =0; num<25; num++){
      console.log(num)
      if(num>10){
         break;
      }
   }
    
   
   for(let i =11; i<20; i++){
      
      console.log(i)
   }
   for(let i =11; i<20; i++){
      if(i%2===1){
         continue
      }
      console.log(i)
   }

   for(let i =1; i<20; i++){
      if(i%3===0){

         console.log(i)

      }
   }

   let total=0;
   for(let i =1; i<20; i++){
      if(i%3===0){
       total=total+i
         console.log(i, total)

      }
   }


     //do while loop
     //just opposite like while 


    //string vs object
    // string is immutable = not changeable
    //array is mutable= changeable
    const capital ='dhaka'
    console.log(capital.length )

    const price =[34,78,34,56,34,46]
    price[2]=80;
    console.log(price)
    console.log(price.length)

    // lowercase uppercase string trip
    const subject ='Chemistry'
    const book = 'chemistry'
    if(subject.toLowerCase()===book.toUpperCase()){
      console.log('i want to read')
    }
    else{
      console.log('i dont  want to read')

    }
    //trim for space 


    // string slice, join, concat, includes 
    const address='muradpur'
    const part=address.slice(2,5);
    console.log(part)


    //reverse string three ways

    // object properties and values

      const tourPackage ={
         cost:2000,
         place:'chattogram',
         vehicle:'car',
         destination:'coxsbazar'
      }
      const props=Object.keys(tourPackage)
      console.log(props)
      const values=Object.values(tourPackage)
      console.log(values)

      for( varii in tourPackage){
         console.log(varii)
      }

         // module 20.5

         // reverse or unshift

         // Ascending and Descending
          
      let count=[5,8,0,7,8,4,9,2,45,76]
      let count_asc=count.sort(function(a,b) {return a-b})
      console.log(count_asc)

       let count_dsc=count.sort(function(a,b) {return b-a})
      console.log(count_dsc) 



          // module 21 fundamentally of function 

         
         function fanOff(){
            console.log( 'off kor')
         }
         fanOff();


         function square (digit){
            console.log(digit);
            const sume =digit*digit
            console.log(sume)
         }
         square(3);

         function practice (num1,num2,num3){
             const  division=num1*num2*num3;
             const substruction=num3-num1;
             const divide =num2/num1;
             console.log(division,divide,substruction)
         }
         practice(5,25,30)

         function add (price1,price2){
            const total =price1*price2;
            return total;
         }
         const result=add(456,879);
         console.log(result)

         function evenNumber (numbe){
            if(numbe%2===0){
               return true;
            }
            else{
               return false;
            }
         }
           console.log(evenNumber(8));
            
           




      