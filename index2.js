const typeUser = 'Маша';
switch(typeUser){
    case 'admin':
        console.log('Вы администратор');
        break;
    case 'user':
        console.log('Вы пользователь');
        break;
    case 'manager':
        console.log('Вы менеджер');
        break;
    default:
        console.log('Неизвестный тип пользователя')
        break;
    }