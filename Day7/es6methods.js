
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );


const pull = (arr, sym) =>
{
  for(let a = 0; a<arr.length; a++)
  {
    if(sym.includes(arr[a]))
    {
    arr.splice(a, 1);
    a--;
    }
  }
  return arr
 
}

const difference = (arr1, arr2) =>
{
  for(let a = 0; a<arr1.length; a++)
  {
    if(arr2.includes(arr1[0]))
    {
    arr1.splice(a, 1);
    a--;
    }
  }
  return arr1;
}


const take = (arr, num) =>
{
  for(let a = num-1; a<arr.length; a++)
  {
    arr.splice(arr[a]),1;
  } 
  return arr;
}

var users = [
  { 'Name': 'barney', 'age': 36 },
  { 'Name': 'fred',   'age': 40 }
];

const lengthOf =(obj) =>
{
  var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}


const filter =(users,query) =>
{
   var res = []
  
  users.forEach(user => {
    if( query.age===user.age)
    res.push(user)
  });
   
   return res
}



const sum = (arr) =>
{
  res = 0;
  for(let a = 0; a<arr.length; a++)
  {
    res = res + arr[a];
  }
  return res
}


const gte = (a,b) =>
{
if(a>b)
return true;
return false;
}

const keys = (str) =>
{
  var res = []
  for(let i = 0 ; i<str.length; i++)
  {
    res.push(i.toString())
  }
  return res
}

const camelcase = (str) =>
{
  str1 = "";
  space = 0;
  for(let i = 0 ; i<str.length; i++)
  {
    if((str.charAt(i)>='a' && str.charAt(i)<='z') || (str.charAt(i) >='A' && str.charAt(i)<='Z'))
    {
      if(space === 1)
      {
      str1 = str1 + str.charAt(i).toUpperCase();
      space = 0;
      }
      else
      str1 = str1 + str.charAt(i);
    }
    else if(str.charAt(i)== " ")
    space = 1;

  }
  return str1;
}


const values = (str) =>
{
  var res = []
  for(let i = 0 ; i<str.length; i++)
  {
    res.push(str.charAt(i))
  }
  return res
}


const endswith = (str,key, index) => {
if(str.charAt(index-1) === key)
return true
return false
}

const union = (arr1, arr2) =>
{
  for(let i = 0; i<arr2.length; i++)
  {
    if(arr1.includes(arr2[i]))
    continue;
  arr1.push(arr2[i])
  
  }
  return arr1;
} 

const map = (arr, func)=>
{
  res = []
  arr.forEach(element => {
    res.push(func(element))
  });
  return res;
}

const reduce = (arr, func) =>
{
 var res =0;
  arr.forEach(element => {
    res = func(res,element);
  });
return res;
}

console.log(filter(users, {age: 40}))
console.log(endswith('abc', 'c', 3))


console.log(map([2,3,4], function (n) {return 2*n}));
console.log(reduce([1,2,3], function(sum, e){return sum + e}))


console.log(gte(17,10));
console.log(keys('h'))
console.log(values('hi'));
console.log(camelcase('--lorem-Hwgug--'));

console.log(union([2], [1, 2,3]))
console.log(chunk([1, 2, 3, 4, 5], 2));
array=['b', 'b', 'a', 'a', 'c', 'b','d','a'];
console.log(pull(array, 'a', 'c'))
console.log(difference([3,5], [4,1,3]));
console.log(take([4,7,8,1,2], 3));

