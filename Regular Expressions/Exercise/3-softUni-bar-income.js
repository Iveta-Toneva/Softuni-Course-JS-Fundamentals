function barIncome(array){

    let regEx=/%(?<name>[A-Z][a-z]+)%[^\d|\|\$%\.]*<(?<product>\w+)>[^\d|\|\$%\.]*\|[^\d|\|\$%\.]*(?<count>\d+)\|[^\d|\|\$%\.]*(?<price>\d+\.?\d*)\$/;
    let totalIncome=0;
    let currentCommand=array.shift();
    while(currentCommand!=="end of shift"){

        let currentData=currentCommand.match(regEx);
        if(currentData){
            let currentTotal=Number(currentData.groups.price)*Number(currentData.groups.count);
            totalIncome+=currentTotal;
            console.log(`${currentData.groups.name}: ${currentData.groups.product} - ${currentTotal.toFixed(2)}`);
        }
       
        currentCommand=array.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}
barIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift']);