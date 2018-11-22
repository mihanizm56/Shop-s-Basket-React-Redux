
import firstPhoto from '../components/AdvertisingBlock/img/good-1.png'
import secondPhoto from '../components/AdvertisingBlock/img/good-2.png'
import thirdPhoto from '../components/AdvertisingBlock/img/good-3.png'
import fourthPhoto from '../components/AdvertisingBlock/img/good-4.png'

import firstItemPhoto from '../components/MainBlock/Items/img/item1.png'
import secondItemPhoto from '../components/MainBlock/Items/img/item2.png'
import thirdItemPhoto from '../components/MainBlock/Items/img/item3.png'

 export default indexOfImg => {
    switch (indexOfImg) {
        case 1: return firstPhoto
        case 2: return secondPhoto
        case 3: return thirdPhoto
        case 4: return fourthPhoto
        case '13524-01': return secondItemPhoto
        case '82039-11': return firstItemPhoto
        case '75039': return thirdItemPhoto
        
        default:
            return 'pictureIsNotFound';
    }
}