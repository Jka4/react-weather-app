import moment from "moment";

export const API_KEY = "47fe20af59af3bbf2a3b306a18fdb1d7";

export const getDateFromDT = (dt, format) => {
  return moment(dt * 1000).format(format);
};

export const sliceTemp = temp => {
  temp += "";
  let slicedString = temp.substring(0, 1);
  return slicedString;
};

export let geo = { lat: 0, lon: 0 };

export let geoPosition = async () => {
  navigator.geolocation.getCurrentPosition(async function(position) {
    let lat = await position.coords.latitude;
    let lon = await position.coords.longitude;

    geo.lat = lat;
    geo.lon = lon;
  });

  let fetch_ = () => {
    console.log(`lat: ${geo.lat}, lon: ${geo.lon}`);
  };

  setTimeout(fetch_, 10);
  return geo;
};

