function pie(pieList, first, last) {
    let start = pieList.indexOf(first);
    let end = pieList.indexOf(last);
    let resultArr = pieList.slice(start, end + 1);

    return resultArr;
}

pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie');
console.log('-----');
pie(['Apple Crisp', 
'Mississippi Mud Pie', 
'Pot Pie', 
'Steak and Cheese Pie', 
'Butter Chicken Pie', 
'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');