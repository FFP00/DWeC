export function KelvinToCelsius(kelvins,decimals,stringify){
    let celsius = kelvins - 273.15;
    
    if(decimals) celsius = celsius.toFixed(decimals);
    if(stringify) celsius = celsius.toString() + " °C";

    return celsius;
}