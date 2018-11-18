
import firstPhoto from '../components/AdvertisingBlock/img/good-1.png'
import secondPhoto from '../components/AdvertisingBlock/img/good-1.png'
import thirdPhoto from '../components/AdvertisingBlock/img/good-1.png'
import fourthPhoto from '../components/AdvertisingBlock/img/good-1.png'


 export default indexOfImg => {
    switch (indexOfImg) {
        case 1: return firstPhoto
        case 2: return secondPhoto
        case 3: return thirdPhoto
        case 4: return fourthPhoto

        default:
            return 'pictureIsNotFound';
    }
}