import axios from 'axios';

const URL =  'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'



export const  placesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options)

        const options = {
         params: {
            bl_latitude: 'sw.lat',
            bl_longitude: 'sw.lng',
            tr_longitude: 'ne.lng',
            tr_latitude: 'ne.lat',
        },
        
          headers: {
            'X-RapidAPI-Key': '8d677d3f43mshacc0bf303d8156bp1b1436jsnb2d465150f0d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        };
        return data
    } catch (error) {
        console.log(error);
    }
}