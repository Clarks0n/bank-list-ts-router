// function getKeys<T extends object>(interfaceName: T): string[] {
//   return Object.keys(interfaceName);
// }

// export function checkKeys<T extends Object>(obj: T, interfaceName: T): obj is T {
//   const keys = Object.keys(obj);
//   const interfaceKeys = Object.keys(interfaceName);
//   console.log(keys.every(key => interfaceKeys.includes(key)))
//   return keys.every(key => interfaceKeys.includes(key));
// }


export function getKeys<T extends object>(interfaceName: T): (keyof T)[] {
  return Object.keys(interfaceName) as (keyof T)[];
}

// export function checkKeys<T extends object>(obj: T, keys: (keyof T)[]): void{
//     let arrKey : Array<string | number | symbol> = [];

//     const valid = keys.every(key => {
//         if(key in obj === false) {
//             arrKey.push(key)
//         }
//     })

//     console.log(valid)

//     if(!valid) {
//           for (let i = 0; i < arrKey.length; i++) {
//             console.log(i)
//             alert(`Server send different key of "${arrKey[i].toString()}"`)
//         }
//     }
      

//     // return keys.every(key => key in obj);
// }



// export function checkKeys(obj: object, keys: string[]): void {
//   for (const key of keys) {
//     if (!(key in obj)) {
//         alert(`Server send different key of "${key.toString()}"`)
//     }
//   }
// }


export function checkKeys(obj: object, keys: object): void {
  const missingKeys: string[] = [];
  for (const key of Object.keys(keys)) {
    if (!(key in obj)) {
      missingKeys.push(key);
    }
  }
  
  if(missingKeys.length > 0) 
    console.error(`Server changing keys of "${missingKeys.join(', ')}"`);
//   return missingKeys;
}


/*
function checkKeys(obj: object, keys: object): string[] {
  const missingKeys: string[] = [];
  for (const key of Object.keys(keys)) {
    if (!(key in obj)) {
      missingKeys.push(key);
    }
  }
  return missingKeys;
}

const obj = {
  name: 'asd',
  age: 18,
  debit: 50
};

const dataFieldObj = {
  name: "name",
  age: "age",
  debit: "debit"
};

const missingKeys = checkKeys(obj, dataFieldObj);

if (missingKeys.length > 0) {
  console.log(`Keys ${missingKeys.join(', ')} are missing from obj`);
} else {
  console.log('All keys are present in obj');
}
*/