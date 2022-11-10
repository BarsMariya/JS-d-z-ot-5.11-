let temp = +10;

if (temp <- 30) { 
    console.log("Оставайтесь дома!");
}
else if (temp >-30 && temp <=-10) { 
    console.log("Сегодня холодно");
}
else if (temp >-10 && temp <=+5) { 
    console.log("Не холодно");
}
else if (temp >+5 && temp <=+15) { 
    console.log("Тепло");
}
else if (temp >+15 && temp <=+25) { 
    console.log("Очень тепло");
}
else if (temp >+25 && temp <=+35) { 
    console.log("Жарко");
}
else if (temp >=+35) { 
    console.log("Пекло");
}
else { 
    console.log('Введите корректные данные');
}