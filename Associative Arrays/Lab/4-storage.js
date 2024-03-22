function storageInfo(array){
   
    let storage=new Map();

    for (const line of array) {
        let [item,quanity]=line.split(" ");
        quanity=Number(quanity);
        if(storage.has(item)){
            let previousQuantity=storage.get(item);
            storage.set(item,previousQuantity+quanity);
        }else{
            storage.set(item,quanity);
        }
    }
    for (const [item,quanity] of storage) {
        console.log(`${item} -> ${quanity}`);
    }
}
storageInfo(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);